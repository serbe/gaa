import { persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export type GaaState = {
  license: number;
  lider: number;
};

export type GaaActions = {
  setLicense: (licenseNumber: number) => void;
  setLider: (liderNumber: number) => void;
};

export type GaaStore = GaaState & GaaActions;

export const defaultInitState: GaaState = {
  license: 0,
  lider: 0,
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
      }),
      { name: 'gaa-storage' },
    ),
  );
};
