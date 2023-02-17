import { MediaType } from '@/shared/constants';
import { IApp } from '@/shared/interfaces';
import { useMediaQuery } from '@chakra-ui/react';

export const useSlides = (app: IApp | null) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return {
    slides: !app
      ? []
      : [
          ...app!.screenshots.map((s) => ({
            id: s.id,
            thumbnailSrc: s.path_thumbnail,
            type: MediaType.Picture,
            media: {
              src: isLargerThan1280 ? s.path_full : s.path_thumbnail,
            },
          })),
          ...app!.movies.map((s) => ({
            id: s.id,
            thumbnailSrc: s.thumbnail,
            type: MediaType.Video,
            media: {
              src: isLargerThan1280 ? s.webm.max : s.webm[480],
              format: 'video/webm',
            },
          })),
        ],
  };
};
