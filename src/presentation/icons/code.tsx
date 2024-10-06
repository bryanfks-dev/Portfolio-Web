/**
 * CodeIcon is an icon component that represents a code snippet.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The props of the component.
 *
 * @returns {JSX.Element} The code icon.
 */
export default function CodeIcon(
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
}
