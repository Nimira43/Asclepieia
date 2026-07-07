import PageTitle from '@/components/page-title'
import DoctorForm from '../_components/doctor-form'

function AddDoctorPage() {
  return (
    <div className='p-5' >
      <PageTitle title='Add Doctor' />
      <DoctorForm />
    </div>
  )
}

export default AddDoctorPage