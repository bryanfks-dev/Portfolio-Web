"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "./components/primary-button";

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
    <main className="flex min-h-dvh w-full items-center justify-center bg-background-primary p-24">
      <div className="flex flex-row items-center gap-10">
        <div className="flex w-1/3 flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-7xl font-bold leading-tight text-primary">
              Sorry!
              <span className="text-text-primary">
                , this page isn&apos;t available.
              </span>
            </span>
            <p className="text-xl">
              The page you were looking for could&apos;t be found.
            </p>
          </div>

          <PrimaryButton className="w-fit" onClick={() => redirectHome()}>
            <span>Back to home</span>
          </PrimaryButton>
        </div>
        <div className="flex flex-1 items-end justify-end">
          <span className="font-istockWeb select-none text-[340px] font-bold text-subtle">
            404
          </span>
        </div>
      </div>
    </main>
  );
}
