import { Badge, Box, Text } from '@chakra-ui/react';

type Props = {
  price: number | string;
  currency: string;
  oldPrice: number | string;
  discount: number | string;
  stick?: boolean;
};

const PriceTag: React.FC<Props> = ({
  price,
  oldPrice,
  discount,
  currency,
  stick = false,
}) => {
  const containerStyles = stick && {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: 2,
    top: 0,
    background: 'blackAlpha.800',
    right: 0,
  };

  return (
    <Box
      {...containerStyles}
      display='flex'
      alignItems='center'
      position={stick ? 'absolute' : 'inherit'}
      pr={4}
    >
      {Boolean(discount && discount != 0) && (
        <Badge
          mr='3'
          fontSize='0.8em'
          colorScheme='green'
          data-testid='discount'
        >
          {discount}%
        </Badge>
      )}

      <Box>
        {Boolean(oldPrice && discount && discount != 0) && (
          <Text
            textDecoration='line-through'
            fontSize={'xs'}
            color={'blue.100'}
            data-testid='old-price'
          >
            {oldPrice} {currency}
          </Text>
        )}
        <Text fontSize={'m'} fontWeight={500} data-testid='current-price'>
          {price} {currency}
        </Text>
      </Box>
    </Box>
  );
};

export default PriceTag;
