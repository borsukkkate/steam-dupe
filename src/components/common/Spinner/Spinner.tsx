import { useState, useEffect } from 'react';
import { Spinner as CUISpinner } from '@chakra-ui/react';

interface Props {
  show: boolean;
  delay?: number;
}

const Spinner = ({ show = false, delay = 0 }: Props) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!show) {
      setShowSpinner(false);
      return;
    }
    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show, delay]);

  return showSpinner ? <CUISpinner size={'xl'} color='blue.200' /> : null;
};

export default Spinner;
