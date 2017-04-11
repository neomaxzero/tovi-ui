import React, { PureComponent } from 'react';
import Slider from './slider';
import SearchBar from './SearchBar/SearchBar';
import { CoolBackground } from './sliderSectionSy';
import Lema from './Lema';

class SearchSection extends PureComponent {
  style = {
      background: 'url(static/backgroundSearch.jpg)',
      height: '340px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

  render() {
    return (
      <div style={this.style}> 
        <Lema />
        <SearchBar />
      </div>
    );
  }
}

export default SearchSection;