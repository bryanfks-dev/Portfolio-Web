'use client';

import { createContext, useContext } from 'react';
import { TUnifiedSectionMenusValues } from '@/types/ui';
import {
  TUseUnifiedSectionReturn,
  useUnifiedSection,
} from '../_hooks/use-unified-section';

export const UnifiedSectionContext =
  createContext<TUseUnifiedSectionReturn | null>(null);

interface IUnifiedSectionProps {
  initialIdentifier: TUnifiedSectionMenusValues;
  children: React.ReactNode;
}

export default function UnifiedSection({
  initialIdentifier,
  children,
}: IUnifiedSectionProps) {
  const { selectedMenu, setSingleSelectedMenu } = useUnifiedSection({
    initialSelectedMenu: initialIdentifier,
  });

  return (
    <UnifiedSectionContext.Provider
      value={{ selectedMenu, setSingleSelectedMenu }}
    >
      <section className="mx-8 md:mx-28 lg:mx-72">{children}</section>
    </UnifiedSectionContext.Provider>
  );
}

interface IUnifiedSectionTriggerProps {
  children: React.ReactNode;
}

function UnifiedSectionTrigger({ children }: IUnifiedSectionTriggerProps) {
  return children;
}

interface IUnifiedSectionChildrenProps {
  identitifer: TUnifiedSectionMenusValues;
  children: React.ReactNode;
}

function UnifiedSectionContent({
  identitifer,
  children,
}: IUnifiedSectionChildrenProps) {
  const context = useContext(UnifiedSectionContext);

  // Since selectedMenu keys always has length of one, we don't need to worry
  // about IndexError
  if (
    context == null ||
    context?.selectedMenu.keys().toArray()[0] !== identitifer
  ) {
    return null;
  }

  return <div className="mt-8 space-y-10">{children}</div>;
}

UnifiedSection.Trigger = UnifiedSectionTrigger;
UnifiedSection.Content = UnifiedSectionContent;
