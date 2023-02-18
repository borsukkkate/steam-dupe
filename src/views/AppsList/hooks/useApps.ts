import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAppsByCategory } from '@/redux/reducers/appsSlice';
import { RootState } from '@/redux/store/store';
import { getApplicationsList } from '@/api/apps.api';
import { useApi } from '@/api/hooks/useApi';
import { ApiCategoryMap } from '@/shared/constants';
import { IApp } from '@/shared/interfaces';

const useApps = () => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(
    (state: RootState) => state.apps.activeCategory
  );

  const activeAppsList = useSelector((state: RootState) => {
    return state.apps[activeCategory!];
  });

  const filtersAppsList = useSelector((state: RootState) => {
    return state.apps.searchString.length > 0
      ? state.apps[activeCategory!].filter((app) =>
          app.name
            .toLowerCase()
            .startsWith(state.apps.searchString.toLocaleLowerCase())
        )
      : state.apps[activeCategory!];
  });

  const setApps = (apps: IApp[]) => {
    dispatch(
      setAppsByCategory({
        apps: apps,
        category: activeCategory!,
      })
    );
  };

  const { init, status } = useApi(
    () => getApplicationsList(ApiCategoryMap[activeCategory!]),
    setApps
  );

  useEffect(() => {
    if (activeCategory && activeAppsList.length === 0) {
      init();
    }
  }, [activeCategory]);

  return {
    status,
    apps: filtersAppsList,
  };
};

export default useApps;
