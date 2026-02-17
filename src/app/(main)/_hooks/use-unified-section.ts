'use client';

import { useState } from 'react';
import { Key } from 'react-aria';
import { UNIFIED_SECTION_MENUS } from '@/constants/ui';
import { TUnifiedSectionMenusValues } from '@/types/ui';

interface IUseUnifiedSectionProps {
  initialSelectedMenu?: TUnifiedSectionMenusValues;
}

export type TUseUnifiedSectionReturn = {
  selectedMenu: Set<Key>;
  setSingleSelectedMenu: (newSelectedKey: Set<Key>) => void;
};

export function useUnifiedSection({
  initialSelectedMenu = UNIFIED_SECTION_MENUS.PROJECTS,
}: IUseUnifiedSectionProps = {}): TUseUnifiedSectionReturn {
  const [selectedMenu, setSelectedMenu] = useState<Set<Key>>(
    new Set([initialSelectedMenu]),
  );

  const setSingleSelectedMenu = (newSelectedKey: Set<Key>) => {
    if (!newSelectedKey.size) {
      return;
    }

    setSelectedMenu(newSelectedKey);
  };

  return {
    selectedMenu,
    setSingleSelectedMenu,
  };
}
