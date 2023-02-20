import { Flex } from '@chakra-ui/react';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Direction } from '@/shared/constants';
import Slide from './Slide/Slide';

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

  return (
    <Flex mt={2} flexDirection={'column'}>
      <Flex mt={2} overflow='scroll' id='media-slider'>
        {slides.map(({ id, src }) => (
          <Slide
            id={id}
            src={src}
            onSlideSelect={onSlideSelect}
            activeSlideId={activeSlideId}
            key={id}
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
