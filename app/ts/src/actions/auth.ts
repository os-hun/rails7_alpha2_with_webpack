import { Api } from '../api'
import { isAxiosError } from '../utils/client'

export const logIn = async (data: any) => {
  try {
    const res = await Api.post('/auth/log_in', { values: data })
    console.log(res)
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.error(e.response.data)
    }
  }
}
