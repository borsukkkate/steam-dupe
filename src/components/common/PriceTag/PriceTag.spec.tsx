import { describe, it } from 'vitest';
import { render } from '@/shared/helpers/test-utils';
import PriceTag from './PriceTag';

const renderMenu = (props: any) => render(<PriceTag {...props} />);

describe('PriceTag', () => {
  describe('Price Tag With Discount', () => {
    const testProps = {
      price: 100,
      currency: 'USD',
      oldPrice: '300',
      discount: '2',
    };

    it('Renders price with discount', () => {
      const { getByTestId } = renderMenu(testProps);

      expect(getByTestId('discount')).toBeVisible();
      expect(getByTestId('old-price')).toBeVisible();
      expect(getByTestId('current-price')).toBeVisible();
    });

    it('Shows correct price data', () => {
      const { getByText } = renderMenu(testProps);

      expect(
        getByText(`${testProps.price} ${testProps.currency}`)
      ).toBeVisible();

      expect(
        getByText(`${testProps.oldPrice} ${testProps.currency}`)
      ).toBeVisible();

      expect(getByText(`${testProps.discount}%`)).toBeVisible();
    });
  });

  describe('Price Tag With Discount', () => {
    const testProps = {
      price: 100,
      currency: 'USD',
      oldPrice: 0,
      discount: 0,
    };

    it('Renders price without discount', () => {
      const { getByTestId, queryByTestId } = renderMenu(testProps);

      expect(queryByTestId('discount')).not.toBeInTheDocument();
      expect(queryByTestId('old-price')).not.toBeInTheDocument();
      expect(getByTestId('current-price')).toBeVisible();
    });

    it('Shows correct price data', () => {
      const { getByText } = renderMenu(testProps);

      expect(
        getByText(`${testProps.price} ${testProps.currency}`)
      ).toBeVisible();
    });
  });
});
