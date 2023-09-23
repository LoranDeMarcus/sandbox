import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid, Icon, InputAdornment, Link } from '@mui/material'
import { IRegisterInputTypes } from '@/modules/Register/types'
import { Link as RouterLink } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

export const Register = () => {
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
        <Typography component="h1" variant="h5">
          Войти в аккаунт
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon fontSize="small" scale="s" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                </InputAdornment>
              ),
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            autoFocus
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
            margin="normal"
            required
            fullWidth
            id="name"
            type="name"
            label="Ваше имя"
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
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
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
            margin="normal"
            required
            fullWidth
            label="Повторить пароль"
            type="password"
            id="repeatPassword"
            {...register('repeatPassword')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="center">
            <Link to="/login" component={RouterLink} color="#bdbdbd" variant="body2">
              Войти в аккаунт
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
