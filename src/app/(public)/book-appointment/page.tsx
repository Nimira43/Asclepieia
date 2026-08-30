'use client'

import { specialisation, workHours } from '@/app/constants'
import PageTitle from '@/components/page-title'
import { IDoctor } from '@/interfaces'
import { checkDoctorAvailability } from '@/server-actions/appointments'
import { Alert, Button, Form, Input, message, Select } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import AvailableDoctors from './_components/available-doctors'
import PatientDetails from './_components/patient-details'

function BookAppointmentPage() {
  const [slotData, setSlotData] = useState({
    date: '',
    time: '',
    specialist: '',
  })

  const [availableDoctors, setAvailableDoctors] = useState<IDoctor[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null)
  const[loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const checkAvailabilityHandler = async () => { 
    try {
      setLoading(true)
      setError('')
      const { success, data } = await checkDoctorAvailability(slotData)
      
      if (!success || !data.length) {
        setError('No doctors available for the given slot.')
      } else {
        setAvailableDoctors(data)
        console.log(data)
      }

    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  const clearHandler = () => {
    setSlotData({
      date: '',
      time: '',
      specialist: '',
    })
    setAvailableDoctors([])
  }

  return (
      <div className='px-10 my-5'>
        <PageTitle title='Book Appointment' />
        <Form layout='vertical'>
          <div className='grid grid-cols-4 gap-4 items-center mt-5'>
            <Form.Item
              label='Date'
              name='date'
            >
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
            <Form.Item
              label='Time'
              name='time'
            >
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
            <Form.Item
              label='Specialist'
              name='specialist'
            >
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
                loading={loading}
              >
                Check Availability
              </Button>
            </div>
          </div>
        </Form>
        {error && (
          <Alert
          title={error}
          type='error'
          showIcon
          closable
          className='mt-5'
          />
        )}
        {availableDoctors.length > 0 && (
          <AvailableDoctors
          doctorsList={availableDoctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
          />
        )}
        {selectedDoctor && (
          <PatientDetails />
        )}
    </div>
  )
}

export default BookAppointmentPage
