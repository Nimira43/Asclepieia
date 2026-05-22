import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IUser } from '@/interfaces'
import { getUserDataFromMongoDB } from '@/server-actions/users'
import { Button, message } from 'antd'
import { RxHamburgerMenu } from 'react-icons/rx'

function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [userData, setUserData] = useState<IUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  
  const getUserData = async () => {
    try {
      setLoading(true)
      const response: any = await getUserDataFromMongoDB()

      if (response.success) {
        setUserData(response.data)
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

  return (
    <div>
      <div className='flex justify-between items-center p-5 px-10 border-b border-grey-4 shadow-sm'>
        <Link
          className='text-2xl logo-text transitioning'
          href='/'>
          Asclepieia
        </Link>
        <div className='flex items-center gap-5'>
          <span className='text-sm'>
            {userData?.name}
          </span>
          <Button
            ghost
            size='small'
          >
            <RxHamburgerMenu
              size={16}
              className='text-dark hover:text-main transitioning'
            />
          </Button>
          
        </div>
        
        {/* <div className='flex gap-4'>
          <Link
            className='uppercase transitioning'
            href='/sign-in'
          >
            Login / Register
          </Link>
        </div>         */}
      </div>  
      <div className='p-5'>
        {children}  
      </div>
    </div>
  )
}

export default PrivateLayout
