import { client } from '../utils/client'
import { ApiOptions } from '../@types/api'
import { API_APTH } from '../Constants'

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
  /**
   * get
   * @params path
   * @params { params }
   */
  get: async (path: string, { params }: ApiOptions = {}) => {
    debug(`${API_APTH}${path}`, { params })

    return await client.get(`${API_APTH}${path}`, { params })
  },

  /**
   * post
   * @params path
   * @params { params, values, headers }
   */
  post: async (path: string, { params, values, headers }: ApiOptions = {}) => {
    debug(`${API_APTH}${path}`, { params, values, headers })

    return await client.post(`${API_APTH}${path}`, values, { params, headers })
  },

  /**
   * put
   * @params path
   * @params { params, values, headers }
   */
  put: async (path: string, { params, values, headers }: ApiOptions = {}) => {
    debug(`${API_APTH}${path}`, { params, values, headers })

    return await client.put(`${API_APTH}${path}`, values, { params, headers })
  },

  /**
   * delete
   * @params path
   * @params { params }
   */
  delete: async (path: string, { params }: ApiOptions = {}) => {
    debug(`${API_APTH}${path}`, { params })

    return await client.delete(`${API_APTH}${path}`, { params })
  },
}
