import { IApp } from '@/shared/interfaces';

export const appMock: IApp = {
  _id: '',
  name: '',
  about_the_game: '',
  short_description: '',
  header_image: '',
  website: '',
  developers: [],
  publishers: [],
  price_overview: {
    currency: 'EUR',
    initial: 100,
    final: 10,
    discount_percent: 10,
    initial_formatted: '100',
    final_formatted: '10',
  },
  platforms: { windows: false, mac: false, linux: false },
  categories: [],
  screenshots: [],
  movies: [],
  release_date: { coming_soon: false, date: '' },
  background: '',
};
