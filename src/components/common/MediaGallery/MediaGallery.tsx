import React, { useEffect, useMemo, useState } from 'react';

import {
  Box,
  Fade,
  Image,
  Skeleton,
  SlideFade,
  useMediaQuery,
  useStyleConfig,
} from '@chakra-ui/react';

import { MediaType } from '@/shared/constants';
import { ISlide } from '@/shared/interfaces';
import Slider from '@/components/common/Slider/Slider';
import Spinner from '@/components/common/Spinner/Spinner';
import VideoPlayer from '@/components/common/VideoPlayer/VideoPlayer';

type Props = {
  slides: ISlide[];
};

const MediaGallery: React.FC<Props> = ({ slides }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const styles = useStyleConfig('Containers', {
    variant: 'regular',
  });
  const [activeMedia, setActiveMedia] = useState<ISlide | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);

  const sliderSlides = useMemo(
    () => slides.map(({ id, thumbnailSrc }) => ({ id, src: thumbnailSrc })),
    [slides]
  );

  useEffect(() => {
    if (slides.length === 0) {
      return;
    }

    setActiveMedia(slides[0]);
  }, [slides]);

  if (!activeMedia) {
    return <Spinner show={true} />;
  }

  const onSlideSelect = (slideId: string | number) => {
    const nextSlide = slides.find((s) => s.id === slideId);

    setActiveMedia(nextSlide!);
  };

  return (
    <Fade in={isLoaded}>
      <Box __css={styles}>
        {activeMedia!.type === MediaType.Picture && (
          <SlideFade in={isLoaded}>
            <Image
              fallback={
                <Image
                  src={activeMedia!.thumbnailSrc}
                  width={'100%'}
                  onLoad={() => setIsLoaded(true)}
                  fallback={
                    <Skeleton
                      height={isLargerThan800 ? '100px' : '300px'}
                    ></Skeleton>
                  }
                />
              }
              src={
                isLargerThan800
                  ? activeMedia!.media.src
                  : activeMedia!.thumbnailSrc
              }
              width={'100%'}
            />
          </SlideFade>
        )}
        {activeMedia!.type === MediaType.Video && (
          <VideoPlayer
            src={activeMedia!.media.src}
            cover={activeMedia!.thumbnailSrc}
            format={activeMedia!.media.format!}
          />
        )}
        <Slider
          slides={sliderSlides}
          activeSlideId={activeMedia!.id}
          onSlideSelect={onSlideSelect}
        />
      </Box>
    </Fade>
  );
};

export default MediaGallery;
