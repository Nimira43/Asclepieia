'use client'

import { specialisation, workDays, workHours } from '@/app/constants'
import { Form, Input, Select, Upload } from 'antd'
import { useState } from 'react'

function DoctorForm() {
  const [profilePicture, setProfilePicture] = useState<any>(null)
  
  return (
    <div className='mt-5'>
      <Form layout='vertical'>
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
          <Select
            options={workHours}
            mode='multiple'
          />
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
          <Select
            options={workHours}
            mode='multiple'
          />
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
      </Form>      
    </div>
  )
}

export default DoctorForm
