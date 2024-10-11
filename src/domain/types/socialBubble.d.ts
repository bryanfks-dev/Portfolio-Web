/**
 * SocialBubbleProps is a type for the props of the SocialBubble component.
 *
 * @property {string} socialName - The name of the social media.
 * @property {React.ElementType} socialIcon - The icon of the social media.
 * @property {string} href - The href of the social media.
 * @property {string} [className] - The class name of the social media bubble.
 */
declare interface SocialBubbleProps {
  socialName: string;
  socialIcon: React.ElementType;
  href: string;
  className?: string;
}
