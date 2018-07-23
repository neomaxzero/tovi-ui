import React from 'react';
import Geosuggest from 'react-geosuggest';

import { SearchSectionContainer, SearchButtonContainer, SearchComponent } from './styles';
import ValueSelector from './ValueSelector';
import Button from '~/components/shared/Button';

class SearchBar extends React.PureComponent {
  search = () => {};

  setValue = value => {
    this.setState({
      value,
    });
  };
  render() {
    return (
      <SearchSectionContainer>
        <SearchButtonContainer>
          <Geosuggest
            types={['(regions)']}
            country={'AR'}
            ref={e => (this._geoSuggest = e)}
            name="location"
            placeholder={'Ingresa un ciudad'}
            autoComplete="off"
          />
          <SearchComponent />
        </SearchButtonContainer>
      </SearchSectionContainer>
    );
  }
}

export default SearchBar;
