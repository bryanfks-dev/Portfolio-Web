'use client';

import { ArrowUp } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';

export default function ReadAgainButton() {
  const scrollToTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button iconLeading={<ArrowUp />} color="tertiary" onClick={scrollToTop}>
      Read Again
    </Button>
  );
}
