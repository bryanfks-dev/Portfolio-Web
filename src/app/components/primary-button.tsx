import clsx from "clsx";

/**
 * PrimaryButton is a component that renders a primary button.
 *
 * @param {PrimaryButtonProps} props - The props of the component.
 *
 * @returns {React.ReactElement} The component.
 */
export default function PrimaryButton({
  className,
  ...props
}: PrimaryButtonProps): React.ReactElement {
  return (
    <button
      className={clsx(
        "inline-block rounded-lg border border-primary bg-primary px-6 py-3 font-medium text-text-secondary hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary",
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
