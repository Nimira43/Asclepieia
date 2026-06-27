import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IUser } from '@/interfaces'
import { getUserDataFromMongoDB } from '@/server-actions/users'
import { Alert, Button, message } from 'antd'
import { RxHamburgerMenu } from 'react-icons/rx'
import Spinner from '@/components/spinner'
import MenuItems from './menu-items'
import { usersGlobalStore, IUsersStore } from '@/store/users-store'


function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false)
  const { setCurrentUserData, currentUserData }: IUsersStore = usersGlobalStore() as any
  
  const getUserData = async () => {
    try {
      setLoading(true)
      const response: any = await getUserDataFromMongoDB()

      if (response.success) {
        setCurrentUserData(response.data)

        if (!response.data.isApproved) {
          setError('Your account is not approved yet. Please contact Admin.')
        }
      } else {
        message.error(response.message)
        setError(response.message)
      }
    } catch (error: any) {
      message.error(error.message)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <div className='flex justify-between items-center p-5 px-10 border-b border-grey-4 shadow-sm'>
        <Link
          className='text-2xl logo-text transitioning'
          href='/admin/dashboard'>
          Asclepieia
        </Link>
        <div className='flex items-center gap-5'>
          <span className='text-sm'>
            {currentUserData?.name}
          </span>
          <Button
            ghost
            size='small'
            onClick={() => setShowMenuItems(true)}
          >
            <RxHamburgerMenu
              size={16}
              className='text-dark hover:text-main transitioning'
            />
          </Button>
        </div>
      </div>  
      {error
        ? (
          <div className='p-5'>
            <Alert
              showIcon
              message={error}
              type='error'
            />
          </div>
        )
        : (
          <div className='p-5'>
            {children}  
          </div>    
        )
      }
      {showMenuItems && (
        <MenuItems
          showMenuItems={showMenuItems}
          setShowMenuItems={setShowMenuItems}
        />
      )}      
    </div>
  )
}

export default PrivateLayout
