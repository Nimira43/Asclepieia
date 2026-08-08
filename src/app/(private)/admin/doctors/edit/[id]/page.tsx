import PageTitle from '@/components/page-title'
import DoctorForm from '../../_components/doctor-form'
import { getDoctorById } from '@/server-actions/doctors'
import { Alert } from 'antd'

interface EditDoctorPageProps {
  params: {
    id: string
  }
}

async function EditDoctorPage({ params }: EditDoctorPageProps) {
  const { success, data } = await getDoctorById(params.id) 
  
  if (!success) {
    return (
      <Alert
        message='Failed to fetch doctor.'
        showIcon
      />
    )
  }
  
const doctor = data
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <PageTitle title='Edit Doctor' />
        <DoctorForm
          type='edit'
          initialValues={doctor}
        />
      </div>
    </div>
  )
}

export default EditDoctorPage
