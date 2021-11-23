import React, { useState, useEffect } from 'react'
import { AppContainer } from '@comp/containers/app/Container'
import { Api } from '@api/index'
import { isAxiosError } from '@utils/client'

export const App = () => {
  const [loading, setLoading] = useState(true)

  const fetch = async () => {
    try {
      const res = await Api.get('/users/test')
      console.log(res)
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        console.error(e.response.data)
      }
    }
  }

  useEffect(() => {
    setLoading(false)
    fetch()
  }, [])

  return <AppContainer loading={loading} />
}
