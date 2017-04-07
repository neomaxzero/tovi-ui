import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import StyledContainer from './sliderSectionSy';

class SliderBar extends PureComponent {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <StyledContainer>
        <Slider {...settings}>
          <img src='static/backgroundSearch.jpg' />
        </Slider>
      </StyledContainer>
    );   
  }
}

export default SliderBar;