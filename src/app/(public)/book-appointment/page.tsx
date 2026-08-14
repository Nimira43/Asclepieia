'use client'

import { specialisation, workHours } from '@/app/constants'
import PageTitle from '@/components/page-title'
import { Button, Form, Input, Select } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'

function BookAppointmentPage() {
  const [slotData, setSlotData] = useState({
    date: '',
    time: '',
    specialist: '',
  })

  const checkAvailabilityHandler = () => { }
  
  const clearHandler = () => {
    setSlotData({
      date: '',
      time: '',
      specialist: '',
    })
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <PageTitle title='Book Appointment' />
        <Form
          layout='vertical'
          className='mt-5'
        >
          <Form.Item label='Date'>
            <Input
              type='date'
              value={slotData.date}
              onChange={(e) =>
                setSlotData({
                  ...slotData,
                  date: e.target.value,
                })
              }
              min={dayjs().format('YYYY-MM-DD')}
            />
          </Form.Item>
          <Form.Item label='Time'>
            <Select
              options={workHours}
              value={slotData.time}
              onChange={(value) =>
                setSlotData({
                  ...slotData,
                  time: value,
                })
              }
              disabled={!slotData.date}
            />
          </Form.Item>
          <Form.Item label='Specialist'>
            <Select
              options={specialisation}
              value={slotData.specialist}
              onChange={(value) =>
                setSlotData({
                  ...slotData,
                  specialist: value,
                })
              }
              disabled={!slotData.time} 
            />
          </Form.Item>
          <div className='grid grid-cols-2 gap-5'>
            <Button
              className='text-sm transitioning'
              onClick={clearHandler}
            >
              Clear
            </Button>
            <Button
              className='text-sm transitioning'
              disabled={!slotData.specialist}
              onClick={checkAvailabilityHandler}
            >
              Check Availability
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default BookAppointmentPage
