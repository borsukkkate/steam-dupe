import { describe, it } from 'vitest';
import { render } from '@/shared/helpers/test-utils';
import StatefulWrapper from './StatefulWrapper';
import { ERROR, PENDING } from '@/api/constants/apiStatus';

const renderWrapper = (props: any) => render(<StatefulWrapper {...props} />);

describe('StatefulWrapper', () => {
  describe('Success State', () => {
    const testProps = { children: <div data-testid='success'>success</div> };

    it('Renders component', () => {
      const { getByText, queryByTestId } = renderWrapper(testProps);

      expect(queryByTestId('loading-spinner')).not.toBeInTheDocument();
      expect(queryByTestId('error-fallback')).not.toBeInTheDocument();
      expect(getByText('success')).toBeVisible();
    });
  });

  describe('Loading State', () => {
    const testProps = {
      status: PENDING,
      children: <div data-testid='success'>success</div>,
    };

    it('Renders menu button', () => {
      const { queryByTestId, getByTestId } = renderWrapper(testProps);

      expect(queryByTestId('success')).not.toBeInTheDocument();
      expect(queryByTestId('error-fallback')).not.toBeInTheDocument();
      expect(getByTestId('loading-spinner')).toBeVisible();
    });
  });

  describe('Error State', () => {
    const testProps = {
      status: ERROR,
      children: <div data-testid='success'>success</div>,
    };

    it('Renders menu button', () => {
      const { getByTestId, queryByTestId } = renderWrapper(testProps);

      expect(queryByTestId('success')).not.toBeInTheDocument();
      expect(queryByTestId('loading-spinner')).not.toBeInTheDocument();
      expect(getByTestId('error-fallback')).toBeVisible();
    });
  });
});
