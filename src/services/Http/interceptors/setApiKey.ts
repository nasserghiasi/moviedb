import { AxiosRequestConfig } from 'axios';
import { API_KEY } from '../../../configs/configs';

export default function setApiKey(config: AxiosRequestConfig) {
  config.params.api_key = API_KEY;

  return config;
}
