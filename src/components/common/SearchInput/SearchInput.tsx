import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

type Props = {
  placeholder?: string;
  onInputChange: (value: string) => void;
  searchString: string;
};

const SearchInput: React.FC<Props> = ({
  placeholder,
  onInputChange,
  searchString = '',
}) => (
  <InputGroup mt={'2'} mb={'2'} w='fit-content'>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='blue.100' />
    </InputLeftElement>
    <Input
      placeholder={placeholder}
      htmlSize={20}
      width='auto'
      variant='flushed'
      value={searchString}
      onChange={(e) => onInputChange(e.target.value)}
      _focusVisible={{
        outline: 'none',
        borderBottom: '1px solid var(--chakra-colors-blue-200)',
      }}
    />
  </InputGroup>
);

export default SearchInput;
