import React, { Component } from 'react';
import { CardShower, TourCard } from 'tovi-cards';

export default class LastMinute extends Component {
  render() {
    return (
      <CardShower>
        {this.props.tours &&
          this.props.tours.map(tour =>
            <TourCard
              imgSrc={tour.portrait}
              category={tour.category}
              endIn={tour.endIn}
              title={tour.name}
              price={tour.price}
            />,
          )}
      </CardShower>
    );
  }
}
