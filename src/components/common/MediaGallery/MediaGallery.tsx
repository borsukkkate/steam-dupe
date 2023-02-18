import React, { useEffect, useMemo, useState } from 'react';

import { Box, Image, useMediaQuery, useStyleConfig } from '@chakra-ui/react';

import { MediaType } from '@/shared/constants';
import { ISlide } from '@/shared/interfaces';
import Slider from '@/components/common/Slider/Slider';
import Spinner from '@/components/common/Spinner/Spinner';
import VideoPlayer from '@/components/common/VideoPlayer/VideoPlayer';

type Props = {
  slides: ISlide[];
  setIsLoaded: (loaded: boolean) => void;
};

const MediaGallery: React.FC<Props> = ({ slides, setIsLoaded }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const styles = useStyleConfig('Containers', {
    variant: 'regular',
  });
  const [activeMedia, setActiveMedia] = useState<ISlide | undefined>();

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
    <Box __css={styles}>
      {activeMedia!.type === MediaType.Picture && (
        <Image
          fallback={
            <Image
              src={activeMedia!.thumbnailSrc}
              width={'100%'}
              onLoad={() => setIsLoaded(true)}
            />
          }
          src={
            isLargerThan800 ? activeMedia!.media.src : activeMedia!.thumbnailSrc
          }
          width={'100%'}
        />
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
  );
};

export default MediaGallery;
