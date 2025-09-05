"use client";

import { useState } from 'react';
import FloatingHamburgerButton from './FloatingHamburgerButton';
import FloatingCallButton from './FloatingCallButton';
import { ReactElement } from 'react';

interface FloatingButtonsProps {
  onHamburgerToggle: () => void;
  isHamburgerOpen: boolean;
}

export default function FloatingButtons({ onHamburgerToggle, isHamburgerOpen }: FloatingButtonsProps): ReactElement {
  return (
    <>
      <FloatingHamburgerButton 
        isOpen={isHamburgerOpen} 
        onToggle={onHamburgerToggle} 
      />
      <FloatingCallButton />
    </>
  );
}
