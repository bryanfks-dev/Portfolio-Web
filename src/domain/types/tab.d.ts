/**
 * TabsProps is a type that defines the properties of a tabs component.
 *
 * @property {TabProps[]} items - The items of the tabs.
 * @see {@link TabProps}
 * @property {(index: number) => void} [onChange] - The function that handles the change of the tab.
 */
declare interface TabsProps {
  items: TabProps[];
  onChange?: (index: number) => void;
}

/**
 * TabProps is a type that defines the properties of a tab.
 *
 * @property {string} label - The label of the tab.
 */
declare interface TabProps {
  label: string;
}
