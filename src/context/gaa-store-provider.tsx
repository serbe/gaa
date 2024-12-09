'use client';

import { type ReactNode, createContext, useState, useContext } from 'react';
import { useStore } from 'zustand';

import { createGaaStore } from '@/context/gaa-store';

type GaaStoreType = ReturnType<typeof createGaaStore>;

export const GaaStoreContext = createContext<GaaStoreType | null>(null);

export interface GaaStoreProviderProps {
  children: ReactNode;
}

export const GaaStoreProvider = ({ children }: GaaStoreProviderProps) => {
  const [gaaStore] = useState(() => createGaaStore());

  return <GaaStoreContext.Provider value={gaaStore}>{children}</GaaStoreContext.Provider>;
};

export const useGaaStore = <T,>(
  selector: (store: ReturnType<GaaStoreType['getState']>) => T,
): [T, GaaStoreType] => {
  const gaaStore = useContext(GaaStoreContext);

  if (!gaaStore) {
    throw new Error(`useGaaStore must be used within GaaStoreProvider`);
  }

  return [useStore(gaaStore, selector), gaaStore];
};
