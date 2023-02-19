import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { getApplicationById } from '@/api/apps.api';
import { useApi } from '@/api/hooks/useApi';
import { RootState } from '@/redux/store/store';
import { IApp } from '@/shared/interfaces';
import { setActiveApp } from '@/redux/reducers/appsSlice';

const useApp = () => {
  const { appId } = useParams();
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.apps.activeApp);

  const initApp = (app: IApp[]) => {
    const nextApp = app[0];

    dispatch(
      setActiveApp({
        ...nextApp,
        about_the_game: DOMPurify.sanitize(nextApp.about_the_game),
      })
    );
  };

  const { init, status } = useApi(() => getApplicationById(appId!), initApp);

  const cashedApp = useSelector((state: RootState) => {
    const activeCategory = state.apps.activeCategory;

    if (!activeCategory) {
      return;
    }

    return state.apps[activeCategory].find((app) => app._id === appId);
  });

  useEffect(() => {
    if (cashedApp) {
      initApp([cashedApp]);
    } else {
      init();
    }

    () => {
      dispatch(setActiveApp(null));
    };
  }, []);

  return {
    status,
    app,
  };
};

export default useApp;
