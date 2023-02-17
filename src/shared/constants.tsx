import { ReactComponent as MacIcon } from '@/assets/mac.svg';
import { ReactComponent as WindowsIcon } from '@/assets/windows.svg';
import { ReactComponent as LinuxIcon } from '@/assets/linux.svg';

export enum AppsApiRoutes {
  NEW_AND_TRENDING = 'new_and_trending',
  TOP_SELLERS = 'top_sellers',
  BEING_PLAYED = 'being_played',
  UPCOMING = 'upcoming',
}

export enum AppCategories {
  NEW_AND_TRENDING = 'new',
  TOP_SELLERS = 'top',
  BEING_PLAYED = 'played',
  UPCOMING = 'upcoming',
}

export const ApiCategoryMap = {
  [AppCategories.NEW_AND_TRENDING]: AppsApiRoutes.NEW_AND_TRENDING,
  [AppCategories.TOP_SELLERS]: AppsApiRoutes.TOP_SELLERS,
  [AppCategories.BEING_PLAYED]: AppsApiRoutes.BEING_PLAYED,
  [AppCategories.UPCOMING]: AppsApiRoutes.UPCOMING,
};

export const appTabs = [
  {
    tabName: 'New and Trending',
    route: AppCategories.NEW_AND_TRENDING,
  },
  {
    tabName: 'Top Sellers',
    route: AppCategories.TOP_SELLERS,
  },
  {
    tabName: `What's Being Played`,
    route: AppCategories.BEING_PLAYED,
  },
  {
    tabName: 'Upcoming',
    route: AppCategories.UPCOMING,
  },
];

export enum Platforms {
  windows = 'windows',
  mac = 'mac',
  linux = 'linux',
}

export const platformsIconsMap = {
  [Platforms.mac]: <MacIcon key='mac' />,
  [Platforms.windows]: <WindowsIcon key='windows' />,
  [Platforms.linux]: <LinuxIcon key='linux' />,
};

export enum MediaType {
  Video = 'video',
  Picture = 'picture',
}

export enum Direction {
  FORWARD = 'forward',
  BACK = 'back',
}
