import { z } from 'zod'

import { passwordRegex } from '@/utils/validations/helper'

export const RegisterValidationSchema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().min(3, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z.string().min(8, { message: 'Password is required' }).regex(passwordRegex, {
      message: 'Password is weak',
    }),
    confirmPassword: z.string().min(8, { message: 'Password is required' }).regex(passwordRegex, {
      message: 'Password is weak',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })
