import React, { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

import Spinner from '../Spinner/Spinner';

type Props = {
  src: string;
  cover: string;
  format: string;
};

const VideoPlayer: React.FC<Props> = ({ src, cover, format }) => (
  <Box>
    <Suspense fallback={<Spinner show={true} />}>
      <video controls src={src} width='100%' poster={cover}>
        <source src={src} type={format} />
      </video>
    </Suspense>
  </Box>
);

export default VideoPlayer;
