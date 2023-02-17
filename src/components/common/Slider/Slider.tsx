import { useEffect } from 'react';
import { Flex, Image } from '@chakra-ui/react';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Direction } from '@/shared/constants';

type Props = {
  slides: { id: string | number; src: string }[];
  activeSlideId: string | number;
  onSlideSelect: (id: string | number) => void;
  withControls?: boolean;
};

const Slider: React.FC<Props> = ({
  slides,
  onSlideSelect,
  activeSlideId,
  withControls = true,
}) => {
  const currentSlideIdx = slides.findIndex((s) => s.id === activeSlideId);

  const switchSlide = (direction: Direction, currentIndex: number) => {
    if (
      (direction === Direction.FORWARD &&
        currentSlideIdx === slides.length - 1) ||
      (direction === Direction.BACK && currentSlideIdx === 0)
    ) {
      return;
    }

    const nextSlideIdx =
      direction === Direction.FORWARD ? currentIndex + 1 : currentIndex - 1;

    onSlideSelect(slides[nextSlideIdx].id);
  };

  useEffect(() => {
    const element = document.getElementById(`slider-img-${activeSlideId}`);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeSlideId]);

  // TODO: Make slider work not only with images

  return (
    <Flex mt={2} flexDirection={'column'}>
      <Flex mt={2} overflow='scroll' id='media-slider'>
        {slides.map(({ id, src }) => (
          <Image
            id={`slider-img-${id}`}
            cursor={'pointer'}
            key={id}
            src={src}
            h={['60px', '100px']}
            mr={2}
            onClick={() => onSlideSelect(id)}
            borderRadius={4}
            loading={'eager'}
            filter={id === activeSlideId ? 'brightness(1)' : 'brightness(0.3)'}
            _hover={{
              filter:
                id === activeSlideId ? 'brightness(1)' : 'brightness(0.5)',
            }}
          />
        ))}
      </Flex>
      {withControls && (
        <Flex justifyContent={'space-between'} mt={2}>
          <ArrowBackIcon
            cursor={'pointer'}
            onClick={() => switchSlide(Direction.BACK, currentSlideIdx)}
            boxSize={6}
            color={currentSlideIdx === 0 ? 'whiteAlpha.300' : 'white'}
          />
          <ArrowForwardIcon
            cursor={'pointer'}
            onClick={() => switchSlide(Direction.FORWARD, currentSlideIdx)}
            boxSize={6}
            color={
              currentSlideIdx === slides.length - 1 ? 'whiteAlpha.300' : 'white'
            }
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Slider;
