import Link from "next/link";

/**
 * SocialBubble is a component for the social media bubble.
 *
 * @param {SocialBubbleProps} props - The props of the component.
 *
 * @see {@link SocialBubbleProps}
 *
 * @returns {JSX.Element} The social media bubble.
 */
export default function SocialBubble(props: SocialBubbleProps): JSX.Element {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-default bg-default p-3 text-invert hover:bg-transparent hover:text-default focus:ring"
    >
      <span className="sr-only">{props.socialName}</span>
      <props.socialIcon className="size-7" strokeWidth={0} />
    </Link>
  );
}
