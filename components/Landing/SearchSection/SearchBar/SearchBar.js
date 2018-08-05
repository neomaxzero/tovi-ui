import React from 'react';
import Geosuggest from 'react-geosuggest';

import { SearchSectionContainer, SearchButtonContainer, SearchComponent } from './styles';
import ValueSelector from './ValueSelector';
import Button from '~/components/shared/Button';
import Router from 'next/router';
import { getLocationField } from '~/utils/maps';

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);

    let value = '';
    if (props.query) {
      value += props.query.c ? `${props.query.c}, ` : '';
      value += props.query.p ? props.query.p : '';
    }
    this.initialValue = value;
  }
  state = { value: '' };

  search = value => {
    if (!value) return;
    let searchPath = '/search';
    const city = getLocationField(value.gmaps.address_components, 'administrative_area_level_2');
    const province = getLocationField(value.gmaps.address_components, 'administrative_area_level_1');

    searchPath += `?p=${province}`;

    if (city) searchPath += `&c=${city}`;

    this.setValue(value);

    Router.push(searchPath);
  };

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
            initialValue={this.initialValue}
            types={['(regions)']}
            country={'AR'}
            ref={e => (this._geoSuggest = e)}
            name="location"
            onSuggestSelect={this.search}
            placeholder={'Ingresa un ciudad'}
            autoComplete="off"
          />
          <SearchComponent onClick={this.search} />
        </SearchButtonContainer>
      </SearchSectionContainer>
    );
  }
}

export default SearchBar;
