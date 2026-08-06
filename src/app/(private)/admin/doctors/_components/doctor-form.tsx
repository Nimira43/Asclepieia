'use client'

import { specialisation, workDays, workHours } from '@/app/constants'
import { uploadFileToFirebaseAndReturnURL } from '@/helpers/firebase-uploads'
import { IDoctor } from '@/interfaces'
import { addDoctor } from '@/server-actions/doctors'
import { Button, Form, Input, message, Select, Upload } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface DoctorFormProps {
  type: 'add' | 'edit'
  initialValues?: Partial<IDoctor>
}

function DoctorForm({ type = 'add', initialValues = {} }: DoctorFormProps) {
  const [profilePicture, setProfilePicture] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (values: any) => {
    try {
      setLoading(true)

      if (profilePicture) {
        values.profilePicture = await uploadFileToFirebaseAndReturnURL(profilePicture)
      }
      let response: any = null

      if (type = 'add') {
        response = await addDoctor(values)
      }

      if (response.success) {
        message.success(response.message)
        router.push('/admin/doctors')
      } else {
        message.error(response.message)
      }
    } catch (error: any) {
      message.error(error.message)           
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className='mt-5'>
      <Form
        layout='vertical'
        onFinish={onSubmit}
      >
        <Form.Item
          name='name'
          label='Name'
          rules={[
            {
              required: true,
              message: 'Name is required.'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[
            {
              required: true,
              message: 'Email is required.'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone'
          rules={[
            {
              required: true,
              message: 'Phone number is required.'
            }
          ]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          name='specialisation'
          label='Specialisation'
          rules={[
            {
              required: true,
              message: 'Specialisation is required.'
            }
          ]}
        >
          <Select
            options={specialisation}
            mode='multiple'
          />
        </Form.Item>
        <Form.Item
          name='workDays'
          label='Work Days'
          rules={[
            {
              required: true,
              message: 'Work Days is required.'
            }
          ]}
        >
          <Select
            options={workDays}
            mode='multiple'
          />
        </Form.Item>
        <Form.Item
          name='startTime'
          label='Start Time'
          rules={[
            {
              required: true,
              message: 'Start Time is required.'
            }
          ]}
        >
          <Select options={workHours} />
        </Form.Item>
        <Form.Item
          name='endTime'
          label='End Time'
          rules={[
            {
              required: true,
              message: 'End Time is required.'
            }
          ]}
        >
          <Select options={workHours} />
        </Form.Item>
        <Form.Item
          name='fee'
          label='Fee'
          rules={[
            {
              required: true,
              message: 'Fee is required.'
            }
          ]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          name='bio'
          label='Bio'
          rules={[
            {
              required: true,
              message: 'Bio is required.'
            }
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label='Profile Photo'>
          <Upload
            listType='picture-card'
            beforeUpload={(file) => {
              setProfilePicture(file)
            }} 
          >
            <div className='span cursor-pointer'>
              {profilePicture
                ? 'Edit'
                : 'Upload'
              }{' '}
              Profile Photo
            </div>
          </Upload>
        </Form.Item>
        <div className='cols-span-4 flex justify-between gap-5'>
          <Button
            disabled={loading}
            className='w-full transitioning'
            onClick={() => router.push('/admin/doctors')}
          >
            Cancel
          </Button>
          <Button
            htmlType='submit'
            loading={loading}
            className='w-full transitioning'
          >
            Submit
          </Button>
        </div>
      </Form>      
    </div>
  )
}

export default DoctorForm
