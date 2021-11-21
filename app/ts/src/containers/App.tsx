import React, { useState, useEffect } from 'react'
import { Api } from '../api'
import { isAxiosError } from '../utils/client'

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

  return (
    <div>
      {loading && <span>loading...</span>}
      {!loading && <h1>Hello world!!</h1>}
    </div>
  )
}
