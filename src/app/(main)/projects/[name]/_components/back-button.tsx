'use client';

import { ArrowLeft } from '@untitledui/icons';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base/buttons/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      iconLeading={<ArrowLeft />}
      size="lg"
      onClick={() => router.back()}
    />
  );
}
