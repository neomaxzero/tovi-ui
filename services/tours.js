import { reqF, secureReq } from './provider';

export const tours = {
  getToursLastMinute: () => reqF(TOURS_API).get(`api/tour/lastMinute/landing/search`),
  getTour: id => reqF(TOURS_API).get(`api/tour/lastMinute/${id}`),
};

export default tours;
