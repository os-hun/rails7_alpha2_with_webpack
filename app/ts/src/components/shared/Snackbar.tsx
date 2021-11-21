import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import MuiSnackbar from '@mui/material/Snackbar'

type Props = {
  title: string
  msg: string
}

export const Snackbar = ({ title, msg }: Props) => {
  return (
    <MuiSnackbar open anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="info">
        <AlertTitle>{title}</AlertTitle>
        {msg}
      </Alert>
    </MuiSnackbar>
  )
}
