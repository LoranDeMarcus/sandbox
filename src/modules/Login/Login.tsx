import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { Grid, InputAdornment, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'

import { ILoginInputTypes } from './types'

export const Login = () => {
  const { handleSubmit, register } = useForm<ILoginInputTypes>({
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<ILoginInputTypes> = (data) => {
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
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                </InputAdornment>
              ),
            }}
            autoFocus
            fullWidth
            id="name"
            label="Имя"
            margin="normal"
            required
            type="name"
            {...register('name')}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="small" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
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
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Запомнить меня"
          />
          <Button fullWidth size="large" sx={{ mt: 3, mb: 2 }} type="submit" variant="contained">
            Войти в аккаунт
          </Button>
          <Grid container justifyContent="center">
            <Link color="#bdbdbd" component={RouterLink} to="/register" variant="body2">
              Зарегистрироваться
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
