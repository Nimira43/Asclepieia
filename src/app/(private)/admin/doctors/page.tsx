import PageTitle from '@/components/page-title'
import { getDoctors } from '@/server-actions/doctors'
import { Alert, Button } from 'antd'
import Link from 'next/link'
import DoctorsTable from './_components/doctors-table'

async function DoctorsPage() {
  const { success, data } = await getDoctors()

  if (!success) {
    return (
      <Alert 
        message='Failed to fetch doctors.'
        showIcon
      />
    )
  }

  const doctors = data

  return (
    <div className='mx-10 p-5'>
      <div className='flex justify-between items-center'>
        <PageTitle title='Doctors' />
        <Button>
          <Link href='/admin/doctors/new'>
            <span className='text-sm uppercase'>
              Add Doctor
            </span>
          </Link>
        </Button>
      </div>
      <DoctorsTable doctors={doctors} />
    </div>
  )
}

export default DoctorsPage
