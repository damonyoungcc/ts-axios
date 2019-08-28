import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  // todo
  xhr(config)
}

export default axios
