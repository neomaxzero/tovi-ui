import React, { PureComponent } from 'react';
// import Slider from './slider';
import SearchBar from './SearchBar/SearchBar';
import { CoolBackground } from './sliderSectionSy';
import Lema from './Lema';
import SearchBack from './styled';

class SearchSection extends PureComponent {
  render() {
    return (
      <SearchBack>
        <Lema />
        <SearchBar query={this.props.query} />
      </SearchBack>
    );
  }
}

export default SearchSection;
