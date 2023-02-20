import { useEffect, useRef } from 'react';
import { Image } from '@chakra-ui/react';

type Props = {
  id: string | number;
  src: string;
  activeSlideId: string | number;
  onSlideSelect: (id: string | number) => void;
};

const Slide: React.FC<Props> = ({ id, src, activeSlideId, onSlideSelect }) => {
  const slideRef = useRef<any>();
  const isActive = id === activeSlideId;

  useEffect(() => {
    if (slideRef.current && isActive) {
      slideRef.current!.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeSlideId]);

  return (
    <Image
      ref={slideRef}
      cursor={'pointer'}
      key={id}
      src={src}
      h={['60px', '100px']}
      mr={2}
      onClick={() => onSlideSelect(id)}
      borderRadius={4}
      loading={'eager'}
      filter={isActive ? 'brightness(1)' : 'brightness(0.3)'}
      _hover={{
        filter: isActive ? 'brightness(1)' : 'brightness(0.5)',
      }}
    />
  );
};

export default Slide;
