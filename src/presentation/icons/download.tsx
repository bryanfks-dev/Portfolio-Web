/**
 * DownloadIcon is an icon component that renders a download icon.
 *
 * @param {React.SVGProps<SVGSVGElement>} props - The props of the component.
 *
 * @returns {JSX.Element} The download icon.
 */
export default function DownloadIcon(
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
      <path d="m12 16 4-5h-3V4h-2v7H8z" />
      <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
    </svg>
  );
}
