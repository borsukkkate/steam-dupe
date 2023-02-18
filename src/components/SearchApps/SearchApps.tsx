import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchString } from '@/redux/reducers/appsSlice';
import { RootState } from '@/redux/store/store';

import SearchInput from '../common/SearchInput/SearchInput';
import { Flex } from '@chakra-ui/react';

const SearchApps = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(
    (state: RootState) => state.apps.searchString
  );

  useEffect(() => {
    () => dispatch(setSearchString(''));
  }, []);

  const onInputChange = (value: string) => {
    dispatch(setSearchString(value));
  };

  return (
    <Flex my={4}>
      <SearchInput
        onInputChange={onInputChange}
        searchString={searchString}
        placeholder='Search app'
      />
    </Flex>
  );
};

export default SearchApps;
