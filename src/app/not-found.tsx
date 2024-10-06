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
    <main className="relative min-h-dvh w-full overflow-hidden bg-background-primary">
      <div className="relative z-40 flex items-center justify-center p-24">
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col gap-8">
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
      </div>

      <div className="absolute -left-[15%] -top-[65%] z-10 h-[610px] w-[610px] rounded-full bg-subtle" />
      <div className="absolute left-[75%] top-[75%] z-10 h-[610px] w-[610px] rounded-full bg-subtle" />
    </main>
  );
}
