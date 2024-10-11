/**
 * Toggle is a component that represents a switch that can be toggled on or off.
 *
 * @returns {JSX.Element} The toggle component.
 */
export default function Toggle(): JSX.Element {
  return (
    <label
      htmlFor="AcceptConditions"
      className="bg-subtle relative inline-block h-6 w-10 cursor-pointer rounded-full transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
    >
      <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

      <span className="bg-invert absolute inset-y-0 start-0 m-1 size-4 rounded-full transition-all peer-checked:start-4" />
    </label>
  );
}
