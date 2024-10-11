/**
 * TextFieldProps is an interface that defines the props of the TextField component.
 *
 * @property {string} placeholder - The placeholder of the text field.
 * @property {string} htmlFor - The for attribute of the text field.
 * @property {(value: string) => void} [onTyping] - The callback function when typing.
 */
declare interface TextFieldProps {
  placeholder: string;
  htmlFor: string;
  onTyping?: (value: string) => void;
}
