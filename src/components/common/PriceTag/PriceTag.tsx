import { Badge, Box, Center, Text, useStyleConfig } from '@chakra-ui/react';

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
  const styles = useStyleConfig('Containers', {
    variant: stick ? 'stick' : 'regular',
  });

  return (
    <Center __css={styles} data-testid='price-tag'>
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
            variant={'secondary-title'}
            data-testid='old-price'
          >
            {oldPrice} {currency}
          </Text>
        )}
        <Text fontSize={'m'} fontWeight={500} data-testid='current-price'>
          {price} {currency}
        </Text>
      </Box>
    </Center>
  );
};

export default PriceTag;
