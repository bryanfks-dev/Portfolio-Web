import { ChangeEvent } from "react";

/**
 * TextFieldArea is a text area component that allows users to enter multiple lines of text.
 *
 * @param {TextFieldProps} props - The properties of the text field.
 *
 * @returns {JSX.Element} The text area component.
 */
export default function TextFieldArea(props: TextFieldProps): JSX.Element {
  /**
   * onChange is a function that handles the change event of the text field area.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event of the text field.
   *
   * @returns {void}
   */
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (!props.onTyping) {
      return;
    }

    props.onTyping(e.target.value);
  };

  return (
    <div>
      <label htmlFor={props.htmlFor} className="sr-only">
        {props.placeholder}
      </label>

      <div className="overflow-hidden rounded-lg border border-subtle focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <textarea
          id={props.htmlFor}
          className="w-full resize-none border-none bg-transparent p-3 align-top focus:ring-0"
          rows={8}
          placeholder={props.placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
