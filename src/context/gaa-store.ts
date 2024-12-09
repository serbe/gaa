import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export type GaaState = {
  license: number;
  lider: number;
  lad: number;
  theme: string;
};

export type GaaActions = {
  setLicense: (licenseNumber: number) => void;
  setLider: (liderNumber: number) => void;
  setLad: (ladNumber: number) => void;
  setTheme: (theme: string) => void;
  switchTheme: () => void;
};

export type GaaStore = GaaState & GaaActions;

export const defaultInitState: GaaState = {
  license: 0,
  lider: 0,
  lad: 0,
  theme: 'light',
};

export const createGaaStore = (initState: GaaState = defaultInitState) => {
  return createStore<GaaStore>()(
    persist(
      (set, get) => ({
        ...initState,
        setLicense: (licenseNumber: number) =>
          set((state) => ({
            ...state,
            license: licenseNumber >= 0 && licenseNumber <= 2 ? licenseNumber : 0,
          })),
        setLider: (liderNumber: number) =>
          set((state) => ({
            ...state,
            lider: liderNumber >= 0 && liderNumber <= 2 ? liderNumber : 0,
          })),
        setLad: (ladNumber: number) =>
          set((state) => ({
            ...state,
            lad: ladNumber >= 0 && ladNumber <= 2 ? ladNumber : 0,
          })),
        setTheme: (theme: string) =>
          set((state) => ({
            ...state,
            theme: theme,
          })),
        switchTheme: () =>
          set((state) => ({
            ...state,
            theme: get().theme === 'dark' ? 'light' : 'dark',
          })),
      }),
      {
        name: 'gaa-store',
        storage: createJSONStorage(() => localStorage),
        skipHydration: true,
      },
    ),
  );
};
