import axios from 'axios';
import setApiKey from './interceptors/setApiKey';
import setHost from './interceptors/setHost';

const Http = axios.create();

Http.interceptors.request.use(setApiKey);
Http.interceptors.request.use(setHost);

export default Http;
