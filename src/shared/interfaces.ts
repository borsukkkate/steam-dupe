import { MediaType, Platforms } from './constants';

export interface IPriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface IPlatforms {
  [Platforms.windows]: boolean;
  [Platforms.mac]: boolean;
  [Platforms.linux]: boolean;
}

interface ICategories {
  id: number;
  description: string;
}

export interface IScreenshots {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface IMovieFormat {
  480: string;
  max: string;
}

export interface IMovies {
  id: number;
  name: string;
  thumbnail: string;
  webm: IMovieFormat;
  mp4: IMovieFormat;
  highlight: boolean;
}

interface IReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface IApp {
  _id: string;
  name: string;
  about_the_game: string;
  short_description: string;
  header_image: string;
  website: string;
  developers: string[];
  publishers: string[];
  price_overview: IPriceOverview;
  platforms: IPlatforms;
  categories: ICategories[];
  screenshots: IScreenshots[];
  movies: IMovies[];
  release_date: IReleaseDate;
  background: string;
}

export interface IMedia {
  src: string;
  format?: string;
}

export interface ISlide {
  id: string | number;
  thumbnailSrc: string;
  media: IMedia;
  type: MediaType;
}
