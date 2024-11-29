import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export type GaaState = {
  license: number;
  lider: number;
  lad: number;
};

export type GaaActions = {
  setLicense: (licenseNumber: number) => void;
  setLider: (liderNumber: number) => void;
  setLad: (ladNumber: number) => void;
};

export type GaaStore = GaaState & GaaActions;

export const defaultInitState: GaaState = {
  license: 0,
  lider: 0,
  lad: 0,
};

export const createGaaStore = (initState: GaaState = defaultInitState) => {
  return createStore<GaaStore>()(
    persist(
      (set) => ({
        ...initState,
        setLicense: (licenseNumber: number) =>
          set({ license: licenseNumber >= 0 && licenseNumber <= 2 ? licenseNumber : 0 }),
        setLider: (liderNumber: number) =>
          set({ lider: liderNumber >= 0 && liderNumber <= 2 ? liderNumber : 0 }),
        setLad: (ladNumber: number) =>
          set({ lad: ladNumber >= 0 && ladNumber <= 2 ? ladNumber : 0 }),
      }),
      {
        name: 'gaa-store',
        storage: createJSONStorage(() => localStorage),
        skipHydration: true,
      },
    ),
  );
};
