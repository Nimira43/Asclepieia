import PageTitle from '@/components/page-title'
import DoctorForm from '../_components/doctor-form'

function AddDoctorPage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <PageTitle title='Add Doctor' />
        <DoctorForm />
      </div>
    </div>
  )
}

export default AddDoctorPage