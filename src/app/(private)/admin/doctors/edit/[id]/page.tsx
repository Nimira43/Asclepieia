import PageTitle from '@/components/page-title'
import DoctorForm from '../../_components/doctor-form'

function EditDoctorPage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <PageTitle title='Edit Doctor' />
        <DoctorForm />
      </div>
    </div>
  )
}

export default EditDoctorPage
