import { useNavigate, useParams } from 'react-router-dom';

import { AppCategories, appTabs } from '@/shared/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory, setSearchString } from '@/redux/reducers/appsSlice';

const useRouting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, appId } = useParams();

  const routes = appTabs.map((at) => at.route);

  useEffect(() => {
    if (category && !appId && routes.every((ac) => ac != category)) {
      navigate(`../apps/category/${routes[0]}`);
      return;
    }

    dispatch(setActiveCategory(category as AppCategories));
    dispatch(setSearchString(''));
  }, [category, appId]);

  return { tabIndex: routes.indexOf(category as AppCategories) };
};

export default useRouting;
