import { useLazyQuery } from '@apollo/client';
import styled, { keyframes } from 'styled-components';
import { resetIdCounter, useCombobox } from 'downshift';
import { useRouter } from 'next/dist/client/router';
import debounce from 'lodash.debounce';
import { SEARCH_MANUAL_QUERY } from '../../queries/SearchBarQueries';
import { lowerCaseFirstLetter } from '../../lib/displayStrings';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
from {
    box-shadow: 0 0 0px var(--orange);
}

to {
    box-shadow: 0 0 10px 1px var(--orange);
}
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_MANUAL_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );

  const searchResult = data ? Object.values(data) : [];
  const items = [];
  searchResult.forEach((element) => items.push(...element));

  const findItemsDebounced = debounce(findItems, 500);
  resetIdCounter();

  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange({ inputValue: currentInputValue }) {
      findItemsDebounced({
        variables: {
          searchTerm: currentInputValue || '',
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      let path = '';
      if (selectedItem?.__typename === 'Brand')
        path = `/gear/brand/${selectedItem.id}`;
      if (selectedItem?.__typename === 'Gearset')
        path = `/gear/gearset/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ArmourType')
        path = `/gear/armourType/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ArmourTalent')
        path = `/talents/armourTalent/${selectedItem.id}`;
      if (selectedItem?.__typename === 'WeaponTalent')
        path = `/talents/weaponTalent/${selectedItem.id}`;
      if (selectedItem?.__typename === 'ExoticArmourPiece')
        path = `/exotics/exoticArmourPiece/${selectedItem.id}`;
      if (selectedItem?.__typename === 'Weapon')
        path = `/weapons/${lowerCaseFirstLetter(selectedItem.class)}/${
          selectedItem.id
        }`;
      router.push({
        pathname: path,
      });
    },
    itemToString: (item) => item?.name || item?.model || '',
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search Field Manual',
            id: 'search',
            className: loading ? 'loading' : null,
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              {item.name || item.model}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No entries found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
