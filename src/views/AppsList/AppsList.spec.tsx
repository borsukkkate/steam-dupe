import { describe, it, vi } from 'vitest';
import { render, waitFor } from '@/shared/helpers/test-utils';
import AppsList from './AppsList';
import * as appsHook from './hooks/useApps';
import { apiStatus } from '@/api/constants/apiStatus';
import { appMock } from '@/mocks/app.mock';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import { IApp } from '@/shared/interfaces';

describe('AppsList', () => {
  describe('Successful AppsList render', () => {
    let appsInfo: any;

    beforeEach(() => {
      appsInfo = {
        status: apiStatus.SUCCESS,
        apps: [appMock],
        onAppSearch: vi.fn(),
        appSearchString: '',
      };
      vi.spyOn(appsHook, 'useApps').mockReturnValue(appsInfo);
    });

    it('Renders all components', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <AppsList />
        </Provider>
      );

      waitFor(() => {
        expect(getByTestId('app-list')).toBeVisible();
        expect(getByTestId('search-input')).toBeInTheDocument();
        expect(getByTestId('app-list-item')).toBeInTheDocument();
      });
    });

    it('Renders all list items', () => {
      const { queryAllByTestId, queryByText } = render(
        <Provider store={store}>
          <AppsList />
        </Provider>
      );

      waitFor(() => {
        expect(queryAllByTestId('app-list-item').length).toEqual(
          appsInfo.apps.length
        );

        appsInfo.apps.map((a: IApp) =>
          expect(queryByText(a.name)).toBeInTheDocument()
        );
      });
    });
  });

  describe('AppsList is loading', () => {
    let appsInfo: any;

    beforeEach(() => {
      appsInfo = {
        status: apiStatus.PENDING,
        apps: [appMock],
        onAppSearch: vi.fn(),
        appSearchString: '',
      };
      vi.spyOn(appsHook, 'useApps').mockReturnValue(appsInfo);
    });

    it('Renders error fallback', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <AppsList />
        </Provider>
      );

      waitFor(() => {
        expect(getByTestId('loading-spinner')).not.toBeVisible();

        expect(getByTestId('app-list')).not.toBeVisible();
        expect(getByTestId('search-input')).not.toBeInTheDocument();
        expect(getByTestId('app-list-item')).not.toBeInTheDocument();
      });
    });
  });

  describe('AppsList render catches error', () => {
    let appsInfo: any;

    beforeEach(() => {
      appsInfo = {
        status: apiStatus.ERROR,
        apps: [appMock],
        onAppSearch: vi.fn(),
        appSearchString: '',
      };
      vi.spyOn(appsHook, 'useApps').mockReturnValue(appsInfo);
    });

    it('Renders error fallback', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <AppsList />
        </Provider>
      );

      waitFor(() => {
        expect(getByTestId('error-fallback')).not.toBeVisible();

        expect(getByTestId('app-list')).not.toBeVisible();
        expect(getByTestId('search-input')).not.toBeInTheDocument();
        expect(getByTestId('app-list-item')).not.toBeInTheDocument();
      });
    });
  });
});
