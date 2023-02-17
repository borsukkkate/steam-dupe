import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppCategories } from '@/shared/constants';
import { IApp } from '@/shared/interfaces';

export interface AppsState {
  [AppCategories.BEING_PLAYED]: IApp[];
  [AppCategories.NEW_AND_TRENDING]: IApp[];
  [AppCategories.TOP_SELLERS]: IApp[];
  [AppCategories.UPCOMING]: IApp[];
  activeCategory: AppCategories | null;
  searchString: string;
}

const initialState: AppsState = {
  searchString: '',
  activeCategory: null,
  [AppCategories.BEING_PLAYED]: [],
  [AppCategories.NEW_AND_TRENDING]: [],
  [AppCategories.TOP_SELLERS]: [],
  [AppCategories.UPCOMING]: [],
};

export const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    setAppsByCategory: (
      state,
      action: PayloadAction<{ category: AppCategories; apps: IApp[] }>
    ) => {
      const { category, apps } = action.payload;

      // TODO: Would be great to replace this line with { limit: 10 } to backend API
      const limitedApps = apps.length <= 10 ? apps : apps.slice(0, 10);
      state[category] = limitedApps;
    },
    setActiveCategory: (state, action: PayloadAction<AppCategories>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setAppsByCategory, setActiveCategory, setSearchString } =
  appsSlice.actions;

export default appsSlice.reducer;
