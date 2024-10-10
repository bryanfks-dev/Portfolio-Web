import clsx from "clsx";
import { ChangeEvent, useState } from "react";

/**
 * Tabs is a component that displays a list of tabs.
 *
 * @param {TabsProps} props - The properties of the tabs.
 *
 * @returns {JSX.Element} The tabs component.
 */
export default function Tabs(props: TabsProps): JSX.Element {
  /**
   * @state {number} selected - The selected tab.
   *
   * @stateSetter {number} setSelected - The selected tab setter.
   */
  const [selected, setSelected] = useState<number>(0);

  /**
   * selectOption is a function that selects an option.
   *
   * @param {ChangeEvent<HTMLSelectElement>} e - The event of the select element.
   *
   * @returns {void}
   */
  const selectOption = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelected(Number.parseInt(e.target.value));

    if (!props.onChange) {
      return;
    }

    props.onChange(Number.parseInt(e.target.value));
  };

  /**
   * changeTab is a function that changes the tab.
   *
   * @param {number} index - The index of the tab.
   *
   * @returns {void}
   */
  const changeTab = (index: number): void => {
    setSelected(index);

    if (!props.onChange) {
      return;
    }

    props.onChange(index);
  };

  return (
    <div>
      <div className="lg:hidden">
        <label htmlFor="Tab" className="sr-only">
          Skills Tab
        </label>

        <select
          id="Tab"
          className="w-full rounded-xl border-2 border-subtle p-3 focus:border-primary"
          onChange={selectOption}
        >
          {props.items.map((item, index) => (
            <option key={index} value={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden lg:block">
        <div className="border-b border-subtle">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {props.items.map((item, index) => (
              <span
                key={index}
                className={clsx(
                  "shrink-0 cursor-pointer border-b-2 px-1 pb-4 font-semibold",
                  selected === index
                    ? "border-primary text-primary"
                    : "border-transparent text-highlight hover:brightness-90",
                )}
                onClick={() => changeTab(index)}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
