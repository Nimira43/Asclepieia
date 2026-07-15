import PageTitle from '@/components/page-title'
import { Button } from 'antd'
import Link from 'next/link'

function DoctorsPage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
      <div className='flex justify-between items-center'>
        <PageTitle title='Doctors' />
        <Button>
          <Link href='/admin/doctors/new'>
            <span className='text-sm uppercase'>Add Doctor</span>
          </Link>
        </Button>
      </div>
      </div>
      </div>
  )
}

export default DoctorsPage
