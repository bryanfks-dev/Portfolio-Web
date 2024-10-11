"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "./components/primaryButton";

/**
 * NotFound is a component that renders the not found page.
 *
 * @returns {JSX.Element} The component.
 */
export default function NotFound(): JSX.Element {
  // Get the router object.
  const router = useRouter();

  /**
   * redirectHome is a function that redirects the user to the home page.
   *
   * @returns {void}
   */
  const redirectHome = (): void => {
    // Redirect to the home page.
    router.push("/");
  };

  return (
    <main className="bg-invert flex min-h-dvh w-full select-none items-center justify-center px-4 py-16 md:px-8 lg:px-16 lg:py-24">
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row-reverse lg:justify-between">
        <span className="font-istockWeb text-9xl font-bold text-subtle lg:text-[20rem]">
          404
        </span>

        <div className="flex flex-col items-center justify-center gap-8 lg:w-1/2 lg:items-start">
          <div className="flex justify-center">
            <span className="text-center text-3xl font-bold text-primary lg:text-left lg:text-7xl">
              Sorry!
              <span className="text-default">
                <span>, this page isn’t available.</span>
              </span>
            </span>
          </div>

          <div className="flex flex-col items-center gap-20 lg:items-start">
            <p className="text-center text-sm lg:text-left lg:text-lg">
              The page you were looking for couldn’t be found, please back to
              homepage.
            </p>

            <PrimaryButton
              onClick={redirectHome}
              className="w-fit text-sm lg:text-base"
            >
              Go back home
            </PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
}
