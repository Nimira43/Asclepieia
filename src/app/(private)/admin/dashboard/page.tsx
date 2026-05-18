import { getUserDataFromMongoDB } from '@/server-actions/users'
import { UserButton } from '@clerk/nextjs'

async function DashboardPage() {
  const mongoUserResponse = await getUserDataFromMongoDB()

  if (!mongoUserResponse?.success) {
    console.log(mongoUserResponse?.message)
  }

  return (
    <div className='p-10'>
      <h1>Dashboard Page</h1>
      <UserButton />
      <h1>Name: {mongoUserResponse?.data?.name}</h1>
      <h1>Id: {mongoUserResponse?.data?._id}</h1>
      <h1>Email: {mongoUserResponse?.data?.email}</h1>
    </div>
  )
}

export default DashboardPage
