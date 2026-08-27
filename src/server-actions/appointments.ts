'use server'

import AppointmentModel from '@/models/appointment-model'
import DoctorModel from '@/models/doctor-model'
import dayjs from 'dayjs'

export const checkDoctorAvailability = async ({
  date,
  time,
  specialist
}: {
  date: string,
  time: string,
  specialist: string
}) => {
  try {
    const bookedDoctorIds = await AppointmentModel.find({   
      date, 
      time 
    }).distinct('doctor')

    const availableDoctors = await DoctorModel.find({
      _id: { $nin: bookedDoctorIds },
      specialisation: { $in: [specialist] },
      workDays: {
        $in: [
          dayjs(date).format('dddd').toLowerCase()
        ]
      },
      startTime: { $lte: time },
      endTime: { $gt: time },
    })

    return {
      success: true,
      data: JSON.parse(JSON.stringify(availableDoctors))
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}
