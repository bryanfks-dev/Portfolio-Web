import clsx from "clsx";

/**
 * Secondary is a component that renders a button with secondary color.
 *
 * @param {PrimaryButtonProps} props - The props of the component.
 *
 * @see {@link SecondaryButtonProps}
 *
 * @returns {JSX.Element} The component.
 */
export default function SecondaryButton(
  props: SecondaryButtonProps,
): JSX.Element {
  return (
    <button
      className={clsx(
        "inline-block rounded-lg border border-secondary bg-secondary px-6 py-3 font-medium text-invert hover:bg-transparent hover:text-secondary focus:outline-none focus:ring focus:ring-secondary active:bg-transparent",
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
