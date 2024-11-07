'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type GaaStore, createGaaStore } from '@/stores/gaa-store';

export type GaaStoreApi = ReturnType<typeof createGaaStore>;

export const GaaStoreContext = createContext<GaaStoreApi | undefined>(undefined);

export interface GaaStoreProviderProps {
  children: ReactNode;
}

export const GaaStoreProvider = ({ children }: GaaStoreProviderProps) => {
  const storeRef = useRef<GaaStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createGaaStore();
  }

  return <GaaStoreContext.Provider value={storeRef.current}>{children}</GaaStoreContext.Provider>;
};

export const useGaaStore = <T,>(selector: (store: GaaStore) => T): [T, GaaStoreApi] => {
  const gaaStoreContext = useContext(GaaStoreContext);

  if (!gaaStoreContext) {
    throw new Error(`useGaaStore must be used within GaaStoreProvider`);
  }

  return [useStore(gaaStoreContext, selector), gaaStoreContext];
};
