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
import { ILoginInputTypes } from './types'
import { Grid, Link } from '@mui/material'

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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            type="name"
            label="Имя"
            autoFocus
            {...register('name')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти в аккаунт
          </Button>
          <Grid container justifyContent="center">
            <Link href="#" variant="body2">
              Зарегистрироваться
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
