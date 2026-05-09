'use server'

import UserModel from '@/models/user-model'
import { currentUser } from '@clerk/nextjs/server'

export const createUser = async () => {
  try {
    const user = await currentUser()

    const mongoDbUserObj = {
      name: `${user?.firstName} ${user?.lastName}`,
      clerkUserId: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      profilePic: user?.imageUrl
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}















