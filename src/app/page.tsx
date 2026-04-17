import { Button, Input, Select } from 'antd'

const options = [
  { label: 'Appointments', value: 'Appointments'},
  { label: 'Prescriptions', value: 'Prescriptions'},
  { label: 'Test Results', value: 'Test Results'},
  { label: 'Medical History', value: 'Medical History'},
  { label: 'Physiotheraphy', value: 'Physiotheraphy'},
]

export default function HomePage() {
  return (
    <div className='p-5 flex flex-col gap-5 w-max'>
      <h1 className='logo-text text-3xl'>
        Asclepieia
      </h1>
      <Button>Login</Button>
      <Button type='primary'>Register</Button>
      <Input
        placeholder='Search'
      />
      <Select  
        options={options}
      />
    </div>
  )
}