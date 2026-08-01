'use server'

import { IDoctor } from '@/interfaces'
import DoctorModel from '@/models/doctor-model'

export const addDoctor = async (payload: Partial<IDoctor>) => {
  try {
    await DoctorModel.create(payload)
    return {
      success: true,
      message: 'Doctor added successfully.'
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const getDoctors = async () => {
  try {
    const doctors = await DoctorModel.find().sort({ createdAt: -1 })
    return {
      success: true,
      data: JSON.parse(JSON.stringify(doctors))
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}