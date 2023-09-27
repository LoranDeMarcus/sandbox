import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid, InputAdornment, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

import { IRegisterInputTypes } from '@/modules/Register/types'
import { RegisterSuccess } from '@/modules/Register/RegisterSuccess'

export const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { handleSubmit, register } = useForm<IRegisterInputTypes>({
    defaultValues: {
      name: '',
      password: '',
    },
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
              fullWidth
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
              fullWidth
              id="name"
              label="Ваше имя"
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
              }}
              fullWidth
              id="password"
              label="Пароль"
              margin="normal"
              required
              type="password"
              {...register('password')}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" scale="s" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              id="repeatPassword"
              label="Повторить пароль"
              margin="normal"
              required
              type="password"
              {...register('repeatPassword')}
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
        ) : (
          <RegisterSuccess />
        )}
      </Box>
    </Container>
  )
}
