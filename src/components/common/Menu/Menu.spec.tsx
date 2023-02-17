import { describe, it } from 'vitest';
import { render } from '@/shared/helpers/test-utils';
import Menu from './Menu';
import { act } from 'react-dom/test-utils';

const renderMenu = (props: any) => render(<Menu {...props} />);

describe('Menu', () => {
  const testProps = { menuItems: ['hiii'] };

  describe('Closed menu', () => {
    it('Renders menu button', () => {
      const { getByText, getByTestId } = renderMenu(testProps);

      expect(getByTestId('categories-menu-button')).toBeVisible();
      expect(getByText(testProps.menuItems[0])).not.toBeVisible;
    });
  });

  describe('Opened menu', () => {
    it('Renders menu with passed items', () => {
      const { getByText, getByTestId } = renderMenu(testProps);

      act(() => {
        getByTestId('categories-menu-button').click();
      });

      expect(getByText(testProps.menuItems[0])).toBeVisible;
    });
  });
});
