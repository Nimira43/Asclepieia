import PageTitle from '@/components/page-title'
import DoctorForm from '../../_components/doctor-form'

function EditDoctorPage() {
  return (
    <div className='p-5'>
      <PageTitle title='Edit Doctor' />
      <DoctorForm />
    </div>
  )
}

export default EditDoctorPage
