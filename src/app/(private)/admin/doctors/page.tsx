import PageTitle from '@/components/page-title'
import { Button } from 'antd'
import Link from 'next/link'

function DoctorsPage() {
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
        <PageTitle title='Doctors' />
        <Button>
          <Link href='/admin/doctors/new'>
            Add Doctor
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default DoctorsPage
