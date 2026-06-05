import PageTitle from '@/components/page-title'
import { IUser } from '@/interfaces'
import { getAllUsers } from '@/server-actions/users'
import { Alert } from 'antd'

async function UsersPage() {
  const { success, data } = await getAllUsers()
  
  if (!success) {
    return (
      <Alert 
        message='Failed to fetch users.'
        showIcon
      />
    )
  }

  const users: IUser[] = data
  console.log(users)


  return (
    <div className='p-5'>
      <PageTitle title='Users' />
    </div>
  )
}

export default UsersPage
