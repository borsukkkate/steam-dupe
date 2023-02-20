import { describe, it } from 'vitest';
import { render, waitFor } from '@/shared/helpers/test-utils';
import AppsListItem from './AppListItem';
import { appMock } from '@/mocks/app.mock';

describe('AppsListItem', () => {
  describe('AppsListItem with price', () => {
    it('Renders all components', () => {
      const { name, price_overview, header_image, developers, platforms } =
        appMock;

      const { getByTestId } = render(
        <AppsListItem
          appInfo={{
            name,
            price_overview,
            header_image,
            developers,
            platforms,
          }}
        />
      );

      waitFor(() => {
        expect(getByTestId('app-list-item')).toBeInTheDocument();
        expect(getByTestId('app-item-info')).toBeInTheDocument();
        expect(getByTestId('thumbnail')).toBeInTheDocument();
        expect(getByTestId('price-tag')).toBeInTheDocument();
      });
    });
  });

  describe('AppsListItem without price', () => {
    it('Renders all components without price tag', () => {
      const { name, header_image, developers, platforms } = appMock;

      const { getByTestId } = render(
        <AppsListItem
          appInfo={{
            name,
            header_image,
            developers,
            platforms,
          }}
        />
      );

      waitFor(() => {
        expect(getByTestId('app-list-item')).toBeInTheDocument();
        expect(getByTestId('app-item-info')).toBeInTheDocument();
        expect(getByTestId('thumbnail')).toBeInTheDocument();

        expect(getByTestId('price-tag')).not.toBeInTheDocument();
      });
    });
  });
});
