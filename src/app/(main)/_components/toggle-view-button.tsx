'use client';

import { useContext } from 'react';
import {
  ButtonGroup,
  ButtonGroupItem,
} from '@/components/base/button-group/button-group';
import { UNIFIED_SECTION_MENUS } from '../../../constants/ui';
import { UnifiedSectionContext } from './unified-section';

export default function ToggleViewButton() {
  const context = useContext(UnifiedSectionContext);

  return (
    <ButtonGroup
      selectedKeys={context?.selectedMenu}
      onSelectionChange={context?.setSingleSelectedMenu}
    >
      <ButtonGroupItem id={UNIFIED_SECTION_MENUS.PROJECTS}>
        Projects
      </ButtonGroupItem>
      <ButtonGroupItem id={UNIFIED_SECTION_MENUS.EXPERIENCES}>
        Experiences
      </ButtonGroupItem>
      <ButtonGroupItem id={UNIFIED_SECTION_MENUS.ABOUT}>About</ButtonGroupItem>
    </ButtonGroup>
  );
}
