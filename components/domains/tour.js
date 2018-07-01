// {
//   imgSrc:
//     'http://outdoor-activities.gr/wp-content/uploads/2017/09/outdoor-activities-4.jpg',
//   category: 'Castigo',
//   endIn: '5',
//   title: 'Titulo Bizarro',
//   price: 1250,
// },

import { Record, List } from 'immutable';

const DEF = 'N/A';

const Tour = Record({
  id: 0,
  name: DEF,
  shortDescription: '',
  longDescription: '',
  province: DEF,
  city: DEF,
  category: DEF,
  dateCreated: new Date(),
  dateTour: new Date(),
  profile:
    'http://www.turismozahr.cl/web/wp-content/uploads/2017/11/BARILOCHElake-820938_640-400x400.jpg',
  price: DEF,
  endIn: DEF,
  vacancy: DEF,
});

const Tours = Record({
  total: 0,
  data: new List(),
});

export const TourMapper = payload =>
  new Tour({
    id: payload.TourId,
    name: payload.ExperienceName,
    shortDescription: payload.ShortDescription,
    longDescription: payload.LongDescription,
    province: payload.Province,
    city: payload.City,
    category: payload.CategoryDescription,
    dateCreated: payload.CreationDate,
    dateTour: payload.TourDateTime,
    price: payload.Price,
    endIn: payload.DeltaAvailableUp,
    vacancy: payload.VacancyNumbers,
  });

export const TourCollectionMapper = payload => {
  console.log('---------------------------------------------------');
  console.log(payload.data);
  console.log('---------------------------------------------------');

  return new Tours({
    total: payload.data.total,
    data: new List(
      payload.data.data.length ? payload.data.data.map(t => TourMapper(t)) : [],
    ),
  });
};

export default Tour;
