import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    specialisation: {
      type: [],
      required: true,
    },
    startTime: {
      type: String,
      default: true,
    },
    endTime: {
      type: String,
      default: true,
    },
    workDays: {
      type: [],
      default: true,
    },
    fee: {
      type: Number,
      default: true,
    },
    bio: {
      type: String,
      default: true,
    },
    profilePicture: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  },
);

if (mongoose.models && mongoose.models.doctors) {
  delete mongoose.models.doctors
}

const DoctorModel = mongoose.model('doctors', doctorSchema)

export default DoctorModel