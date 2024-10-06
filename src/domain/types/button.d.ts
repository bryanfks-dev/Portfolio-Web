/**
 * PrimaryButtonProps is a type that describes the props that the
 * PrimaryButton component accepts.
 *
 * @property {React.ReactNode} children - The children of the button.
 */
declare interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
