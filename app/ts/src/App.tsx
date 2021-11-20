import React, { useState, useEffect } from 'react'

export const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div>
      {loading && <span>loading...</span>}
      {!loading && <h1>Hello world!!</h1>}
    </div>
  )
}
