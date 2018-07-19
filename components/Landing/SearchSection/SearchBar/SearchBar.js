import React from 'react';
import { SearchSectionContainer, SearchButtonContainer } from './styles';
import ValueSelector from './ValueSelector';
import Button from '~/components/shared/Button';

class SearchBar extends React.PureComponent {
  search = () => {};

  render() {
    return (
      <SearchSectionContainer>
        <ValueSelector title={'Donde'} value={'Puerto Madero'} />
        <ValueSelector title={'Cuando'} value={'10 de ene - 15 de ene'} />
        <ValueSelector title={'Personas'} value={'2 Adultos - 1 Niño'} />
        <SearchButtonContainer>
          <Button name={'Buscar'} onClick={this.search} />
        </SearchButtonContainer>
      </SearchSectionContainer>
    );
  }
}

export default SearchBar;
