import { client } from '../utils/client'
import { ApiOptions } from '../@types/api'

const debug = (path: string, { params, values, headers }: ApiOptions) => {
  if (process.env.NODE_ENV === 'development') {
    console.log({
      request: {
        path,
        params,
        values,
        headers,
      },
    })
  }
}

export const Api = {
  get: async (path: string, { params }: ApiOptions) => {
    debug(path, { params })

    return await client.get(path, { params })
  },
  post: async (path: string, { params, values, headers }: ApiOptions) => {
    debug(path, { params, values, headers })

    return await client.post(path, values, { params, headers })
  },
  put: async (path: string, { params, values, headers }: ApiOptions) => {
    debug(path, { params, values, headers })

    return await client.put(path, values, { params, headers })
  },
  delete: async (path: string, { params }: ApiOptions) => {
    debug(path, { params })

    return await client.delete(path, { params })
  },
}
