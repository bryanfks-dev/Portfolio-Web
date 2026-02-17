import { UNIFIED_SECTION_MENUS } from '@/constants/ui';

type TUnifiedSectionMenusKeys = keyof typeof UNIFIED_SECTION_MENUS;
type TUnifiedSectionMenusValues =
  (typeof UNIFIED_SECTION_MENUS)[TUnifiedSectionMenusKeys];
