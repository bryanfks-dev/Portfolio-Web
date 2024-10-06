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
      className="rounded-full border border-text-primary bg-text-primary p-3 text-text-secondary hover:bg-transparent hover:text-text-primary focus:ring"
    >
      <span className="sr-only">{props.socialName}</span>
      <props.socialIcon className="size-7" strokeWidth={0} />
    </Link>
  );
}
