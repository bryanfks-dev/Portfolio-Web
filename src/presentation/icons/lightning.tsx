/**
 * LightningIcon is an icon component that represents a lightning bolt.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The props of the component.
 *
 * @returns {JSX.Element} The lightning icon.
 */
export default function LightningIcon(
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element {
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
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}
