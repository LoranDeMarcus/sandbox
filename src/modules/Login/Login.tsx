import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import { zodResolver } from '@hookform/resolvers/zod'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { LoginValidationSchema } from '@/utils/validations/loginValidation'

import { ILoginInputTypes } from './types'

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClickShowPassword = () => setIsVisible((prevState) => !prevState)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputTypes>({
    defaultValues: {
      name: '',
      password: '',
    },
    resolver: zodResolver(LoginValidationSchema),
    reValidateMode: 'onBlur',
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
            error={Boolean(errors.name?.message)}
            fullWidth
            helperText={errors?.name?.message}
            id="name"
            label="Name"
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
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {isVisible ? <VisibilityOff /> : <Visibility />}
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
            type={isVisible ? 'text' : 'password'}
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
