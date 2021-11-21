import React from 'react'
import { useForm } from 'react-hook-form'
import { getCsrfToken } from '../../utils'
import { logIn } from '../../actions/auth'

export const LogIn = () => {
  const { handleSubmit, register } = useForm()

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(logIn)}>
        {getCsrfToken() && (
          <input
            {...register('authenticity_token')}
            type="hidden"
            value={getCsrfToken()}
          />
        )}
        <input {...register('auth[email]')} type="email" />
        <input {...register('auth[password]')} type="password" />
        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}
