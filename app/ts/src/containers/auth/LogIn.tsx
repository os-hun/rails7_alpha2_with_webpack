import React from 'react'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import { getCsrfToken } from '@utils/index'
import { logIn } from '@actions/auth'

export const LogIn = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  return (
    <div className="container-xs">
      <h1>Log In</h1>
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
    </div>
  )
}
