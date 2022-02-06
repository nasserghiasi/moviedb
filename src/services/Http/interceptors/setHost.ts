import { AxiosRequestConfig } from 'axios';
import { API_HOST } from '../../../configs/configs';

export default function setHost(config: AxiosRequestConfig) {
  return {
    ...config,
    url: API_HOST + config.url,
  };
}
