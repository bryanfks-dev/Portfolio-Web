'use client';

import { ArrowLeft } from '@untitledui/icons';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base/buttons/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="flex min-h-screen items-center bg-primary md:min-h-[calc(100dvh-7rem)]">
      <div className="mx-auto max-w-container grow px-4 md:px-8">
        <div className="flex w-full flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col gap-4 text-center md:gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-display-xs md:text-display-sm">404</h2>
              <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                Page not found
              </h1>
            </div>

            <p className="text-lg text-tertiary md:text-xl">
              The page you are looking for doesn't exist.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <Button
              color="secondary"
              size="lg"
              iconLeading={ArrowLeft}
              onClick={() => router.back()}
            >
              Go back
            </Button>
            <Button size="lg" onClick={() => router.back()}>
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
