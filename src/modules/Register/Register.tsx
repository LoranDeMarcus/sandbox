import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { RegisterValidationSchema } from '@/utils/validations/registerValidation'

import { IRegisterInputTypes } from './types'
import { RegisterSuccess } from './RegisterSuccess'

export const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setIsVisiblePassword((prevState) => !prevState)
  const handleClickShowConfirmPassword = () =>
    setIsVisibleConfirmPassword((prevState) => !prevState)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterInputTypes>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(RegisterValidationSchema),
    reValidateMode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IRegisterInputTypes> = (data) => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" mb={1} variant="h5">
          Регистрация
        </Typography>
        <Typography
          component="p"
          sx={{ marginBottom: 5, color: 'rgba(0, 0, 0, 0.25)' }}
          variant="body2"
        >
          Для входа в чат, вам нужно зарегистрироваться
        </Typography>
        {isSuccess ? (
          <RegisterSuccess />
        ) : (
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon fontSize="small" scale="s" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  </InputAdornment>
                ),
              }}
              autoComplete="email"
              autoFocus
              error={Boolean(errors.email?.message)}
              fullWidth
              helperText={errors?.email?.message}
              id="email"
              label="Email"
              margin="normal"
              required
              {...register('email')}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon fontSize="small" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.name?.message)}
              fullWidth
              helperText={errors?.name?.message}
              id="name"
              label="Your name"
              margin="normal"
              required
              type="name"
              {...register('name')}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" scale="s" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={handleClickShowPassword}
                    >
                      {isVisiblePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.password?.message)}
              fullWidth
              helperText={errors?.password?.message}
              id="password"
              label="Password"
              margin="normal"
              required
              type={isVisiblePassword ? 'text' : 'password'}
              {...register('password')}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" scale="s" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={handleClickShowConfirmPassword}
                    >
                      {isVisibleConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.confirmPassword?.message)}
              fullWidth
              helperText={errors?.confirmPassword?.message}
              id="confirmPassword"
              label="Confirm password"
              margin="normal"
              required
              type={isVisibleConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
            />
            <Button fullWidth size="large" sx={{ mt: 3, mb: 2 }} type="submit" variant="contained">
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="center">
              <Link color="#bdbdbd" component={RouterLink} to="/login" variant="body2">
                Войти в аккаунт
              </Link>
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  )
}
