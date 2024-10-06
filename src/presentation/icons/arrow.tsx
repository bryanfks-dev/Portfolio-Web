/**
 * ArrowIcon is an icon component that renders an right arrow icon.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The props of the component.
 *
 * @returns {JSX.Element} The right arrow icon.
 */
export function ArrowIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
