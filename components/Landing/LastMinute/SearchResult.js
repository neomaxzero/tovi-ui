import React, { Component } from 'react';
import { CardShower, TourCard } from 'tovi-cards';
import Router from 'next/router';
import Link from 'next/link';
import EmptyMessage from './EmptyMessage';

export default class LastMinute extends Component {
  render() {
    const { ciudad, provincia } = this.props.searchParams;
    return this.props.tours.length ? (
      <CardShower>
        {this.props.tours &&
          this.props.tours.map(tour => (
            <a href={`/tour/${tour.id}`} target="_blank">
              <TourCard
                imgSrc={tour.portrait}
                category={tour.category}
                endIn={tour.endIn}
                title={tour.name}
                price={tour.price}
              />
            </a>
          ))}
      </CardShower>
    ) : (
      <EmptyMessage provincia={provincia} ciudad={ciudad} />
    );
  }
}
