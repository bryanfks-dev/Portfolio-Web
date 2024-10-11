import clsx from "clsx";

/**
 * PrimaryButton is a component that renders a button with primary color.
 *
 * @param {PrimaryButtonProps} props - The props of the component.
 * 
 * @see {@link PrimaryButtonProps}
 *
 * @returns {JSX.Element} The component.
 */
export default function PrimaryButton({
  className,
  ...props
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        "inline-block rounded-lg border border-primary bg-primary px-6 py-3 font-medium text-invert hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:bg-transparent",
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
