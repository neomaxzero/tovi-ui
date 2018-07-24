import { reqF, secureReq } from './provider';
import queryString from 'query-string';

export const tours = {
  getToursLastMinute: body => reqF(TOURS_API).get(`api/tour/lastMinute/landing/search?${queryString.stringify(body)}`),
  getTour: id => reqF(TOURS_API).get(`api/tour/lastMinute/${id}`),
};

export default tours;
