import { AxiosRequestHeaders } from 'axios'

export type ApiOptions = {
  values?: {
    [x: string]: string
  }
  params?: {
    [x: string]: string
  }
  headers?: AxiosRequestHeaders
}
