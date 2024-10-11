import { ChangeEvent } from "react";

/**
 * TextField is a component that renders a text field.
 *
 * @param {TextFieldProps} props - The properties of the text field.
 *
 * @see {@link TextFieldProps}
 *
 * @returns {JSX.Element} The text field component.
 */
export default function TextField(props: TextFieldProps): JSX.Element {
  /**
   * onChange is a function that handles the change event of the text field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event of the text field.
   *
   * @returns {void}
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!props.onTyping) {
      return;
    }

    props.onTyping(e.target.value);
  };

  return (
    <label
      htmlFor={props.htmlFor}
      className="relative block rounded-lg border border-subtle focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
    >
      <input
        type="text"
        id={props.htmlFor}
        className="peer border-none bg-transparent p-3 text-text-primary placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={props.placeholder}
        onChange={onChange}
      />

      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-background-primary p-0.5 text-xs text-text-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {props.placeholder}
      </span>
    </label>
  );
}
