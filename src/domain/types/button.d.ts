/**
 * PrimaryButtonProps is a type that describes the props that the
 * PrimaryButton component accepts.
 * 
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 *
 * @property {React.ReactNode} children - The children of the button.
 */
declare interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * SecondaryButtonProps is a type that describes the props that the
 * SecondaryButton component accepts.
 *
 * @property {React.ReactNode} children - The children of the button.
 * @property {string} className - The class name of the button.
 * @property {() => void} onClick - The function to call when the button is clicked.
 */
declare interface SecondaryButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}
