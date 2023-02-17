import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getApplicationById } from '@/api/apps.api';
import { useApi } from '@/api/hooks/useApi';
import { RootState } from '@/redux/store/store';
import { IApp } from '@/shared/interfaces';

const useApp = () => {
  const { appId } = useParams();
  const [activeApp, setActiveApp] = useState<IApp | null>(null);

  const initApp = (app: IApp[]) => setActiveApp(app[0]);

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
  }, []);

  return {
    app: activeApp,
    status,
  };
};

export default useApp;
