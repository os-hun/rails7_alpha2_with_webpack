import React from 'react'

type Props = {
  loading: boolean
}

export const AppContainer = ({ loading }: Props) => {
  return (
    <div className="container-md">
      {loading && <span>loading...</span>}
      {!loading && <h1>Hello world!!</h1>}
    </div>
  )
}
