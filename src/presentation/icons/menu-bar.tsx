/**
 * MenuBarIcon is an icon component that renders a menu bar icon
 * with 3 bottom right bar.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The props of the component.
 *
 * @returns {JSX.Element} The menu bar icon.
 */
export default function MenuBarIcon(
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
