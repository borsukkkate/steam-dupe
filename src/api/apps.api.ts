import { AppsApiRoutes } from '@/shared/constants';
import { IApp } from '@/shared/interfaces';
import api from './api';

export const getApplicationsList = (resource: AppsApiRoutes) => {
  return api.get<IApp[]>(`?tab=${resource}`);
};

export const getApplicationById = (appId: string) => {
  return api.get<IApp[]>(`?appid=${appId}`);
};
