import Link from 'next/link';
import { NAVBAR_DATA } from '@/data/navbar';
import { cx } from '@/utils/cx';

export default function Navbar() {
  return (
    <>
      <header className="hidden h-28 w-full md:block">
        <div className="fixed top-0 left-0 z-99 flex h-28 w-full items-center justify-between border border-primary/25 bg-primary/25 px-28 drop-shadow-md backdrop-blur-md lg:px-72">
          {NAVBAR_DATA.logo.child}

          <nav className="flex gap-8 font-semibold text-primary">
            {NAVBAR_DATA.navigations.map((navigation) => (
              <li key={navigation.name} className="list-none">
                <Link
                  href={navigation.href}
                  aria-label={navigation.name}
                  className="decoration-3 hover:text-brand-500 hover:underline"
                >
                  {navigation.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 z-50 block w-full px-6 py-4 md:hidden">
        <nav className="flex h-12 w-full items-center justify-evenly gap-2 rounded-lg rounded-b-2xl border border-primary/25 bg-primary/25 py-4 backdrop-blur-md">
          {NAVBAR_DATA.navigations.map((navigation) => (
            <li key={navigation.name} className="list-none">
              <Link
                href={navigation.href}
                className={cx(
                  'flex items-center gap-2 text-base font-semibold text-primary hover:text-brand-500',
                )}
                aria-label={navigation.name}
              >
                {navigation.icon}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
}
