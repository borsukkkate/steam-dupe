import { describe, it, vi } from 'vitest';
import { render, waitFor } from '@/shared/helpers/test-utils';
import AppPanel from './AppPanel';
import * as appHook from './hooks/useApp';
import * as slideHook from './hooks/useSlides';
import { apiStatus } from '@/api/constants/apiStatus';
import { appMock } from '@/mocks/app.mock';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

describe('AppPanel', () => {
  describe('Successful AppPanel render', () => {
    beforeEach(() => {
      vi.spyOn(appHook, 'useApp').mockReturnValue({
        status: apiStatus.SUCCESS,
        app: appMock,
      });

      vi.spyOn(slideHook, 'useSlides').mockReturnValue({
        slides: [],
      });
    });

    it('Renders all components', () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <AppPanel />
        </Provider>
      );

      waitFor(() => {
        expect(getByTestId('app-panel')).toBeVisible();
        expect(getByTestId('header')).toBeInTheDocument();
        expect(getByTestId('app-info')).toBeInTheDocument();
        expect(getByTestId('about')).toBeInTheDocument();
      });
    });
  });

  describe('Loading AppPanel render', () => {
    beforeEach(() => {
      vi.spyOn(appHook, 'useApp').mockReturnValue({
        status: apiStatus.PENDING,
        app: appMock,
      });

      vi.spyOn(slideHook, 'useSlides').mockReturnValue({
        slides: [],
      });
    });

    it('Renders spinner & does not display elements', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <AppPanel />
        </Provider>
      );

      expect(queryByTestId('header')).not.toBeInTheDocument();
      expect(queryByTestId('app-info')).not.toBeInTheDocument();
      expect(queryByTestId('about')).not.toBeInTheDocument();

      expect(queryByTestId('loading-spinner')).toBeInTheDocument();
    });
  });

  describe('AppPanel caught error', () => {
    beforeEach(() => {
      vi.spyOn(appHook, 'useApp').mockReturnValue({
        status: apiStatus.ERROR,
        app: appMock,
      });

      vi.spyOn(slideHook, 'useSlides').mockReturnValue({
        slides: [],
      });
    });

    it('Renders error fallback & does not display elements', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <AppPanel />
        </Provider>
      );

      expect(queryByTestId('header')).not.toBeInTheDocument();
      expect(queryByTestId('app-info')).not.toBeInTheDocument();
      expect(queryByTestId('about')).not.toBeInTheDocument();

      waitFor(() => {
        expect(queryByTestId('error-fallback')).toBeInTheDocument();
      });
    });
  });
});
