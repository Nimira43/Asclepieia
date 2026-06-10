import PageTitle from '@/components/page-title'
import { IUser } from '@/interfaces'
import { getAllUsers } from '@/server-actions/users'
import { Alert } from 'antd'
import UsersTable from './_components/users-table'

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
  return (
    <div className='p-5'>
      <PageTitle title='Users' />
      <UsersTable users={users} />
    </div>
  )
}

export default UsersPage
