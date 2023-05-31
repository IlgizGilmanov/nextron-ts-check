import { useCallback, useRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';

import { TDropdownMenu } from './types';

export type TUseDropdownMenu = {
  selectedIndex: TDropdownMenu['selectedIndex'];
  defaultLabel: TDropdownMenu['defaultLabel'];
  onSelect?: TDropdownMenu['onSelect'];
};

const useDropdownMenu = ({ selectedIndex, defaultLabel, onSelect }: TUseDropdownMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(10)],
  });

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const handleSelect = useCallback((index: number | null) => {
    setIsOpen(false);

    if (onSelect) {
      onSelect(index);
    }

    if (index !== null) {
      setSelectedLabel(index === 0 ? defaultLabel : labelsRef.current[index]);
    }
  }, []);

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    listNav,
    typeahead,
    click,
    dismiss,
    role,
  ]);

  return {
    isOpen,
    activeIndex,
    selectedIndex,
    selectedLabel,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    elementsRef,
    labelsRef,
    handleSelect,
  };
};

export default useDropdownMenu;
