/**
 * AirplaneSolidIcon is an icon component that displays a solid airplane.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The properties of the icon.
 *
 * @returns {JSX.Element} The airplane solid icon.
 */
export default function AirplaneSolidIcon(
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m2.6 13.083 3.452 1.511L16 9.167l-6 7 8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z" />
    </svg>
  );
}
