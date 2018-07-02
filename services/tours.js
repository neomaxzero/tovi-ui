import { reqF, secureReq } from './provider';

export const tours = {
  getToursLastMinute: () =>
    reqF(TOURS_API).get(`api/tour/lastMinute/landing/search`),
};

export default tours;
