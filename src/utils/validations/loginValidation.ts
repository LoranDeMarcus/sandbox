import { z } from 'zod'

import { passwordRegex } from '@/utils/validations/helper'

export const LoginValidationSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  password: z.string().min(8, { message: 'Password is required' }).regex(passwordRegex, {
    message: 'Password is weak',
  }),
})
