import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAppsByCategory, setSearchString } from '@/redux/reducers/appsSlice';
import { RootState } from '@/redux/store/store';

import { useApi } from '@/api/hooks/useApi';
import { ApiCategoryMap } from '@/shared/constants';
import { IApp } from '@/shared/interfaces';
import { getApplicationsList } from '@/api/apps.api';

const useApps = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.apps.activeCategory
  );

  const { init, status } = useApi(
    () => getApplicationsList(ApiCategoryMap[activeCategory!]),
    (apps: IApp[]) => {
      dispatch(
        setAppsByCategory({
          apps: apps,
          category: activeCategory!,
        })
      );
    }
  );

  useEffect(() => {
    if (activeCategory && activeAppsList.length === 0) {
      init();
    }
  }, [activeCategory]);

  useEffect(() => {
    () => dispatch(setSearchString(''));
  }, []);

  const searchString = useSelector(
    (state: RootState) => state.apps.searchString
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

  return {
    status,
    apps: filtersAppsList,
    onAppSearch: (value: string) => {
      dispatch(setSearchString(value));
    },
    appSearchString: searchString,
  };
};

export default useApps;
