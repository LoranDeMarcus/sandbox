import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'

export const RegisterSuccess = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        flexDirection: 'column',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <InfoTwoToneIcon sx={{
        width: '48px',
        height: '48px',
        filter: 'invert(0.5) sepia(1)  saturate(10) hue-rotate(180deg)',
      }} />
      <Typography component="h3" variant="h5" mb={1}>
        Подтвердите свой аккаунт
      </Typography>
      <Typography align="center" component="p" variant="body2" color="rgba(0, 0, 0, 0.25)">
        На Вашу почту отправлено письмо с ссылкой на подтверждение
        аккаунта.
      </Typography>
    </Box>
  )
}
