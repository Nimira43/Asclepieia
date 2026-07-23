import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import firebaseApp from '@/config/firebase'

export const uploadFileToFirebaseAndReturnURL = async (file: File) => {
  try {
    const storageRef = ref(getStorage(firebaseApp), `files/${file.name}`)
    const uploadedFile = await uploadBytes(storageRef, file)
    const url = await getDownloadURL(uploadedFile.ref)
    return url
  } catch (error: any) {
    throw new Error(error.message)
  }
}