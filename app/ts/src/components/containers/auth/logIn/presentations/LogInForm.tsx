import React from 'react'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import { logIn } from '@actions/auth'
import { getCsrfToken } from '@utils/index'

export const LogInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(logIn)}>
      {getCsrfToken() && (
        <input
          {...register('authenticity_token')}
          type="hidden"
          value={getCsrfToken()}
        />
      )}
      <TextField
        {...register('auth[email]')}
        type="email"
        label="Email"
        size="small"
      />
      <TextField
        {...register('auth[password]')}
        type="password"
        label="Password"
        size="small"
      />
      <LoadingButton loading={isSubmitting} type="submit" variant="contained">
        LogIn
      </LoadingButton>
    </form>
  )
}
