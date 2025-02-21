import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export interface GaaState {
  license: number;
  lider: number;
  lad: number;
  theme: string;
  token: string | null;
  username: string | null;
}

export interface GaaActions {
  setLicense: (licenseNumber: number) => void;
  setLider: (liderNumber: number) => void;
  setLad: (ladNumber: number) => void;
  setTheme: (theme: string) => void;
  switchTheme: () => void;
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
  login: (username: string, token: string) => void;
  logout: () => void;
}

export interface GaaStore extends GaaState, GaaActions {}

export const defaultInitState: GaaState = {
  license: 0,
  lider: 0,
  lad: 0,
  theme: 'light',
  token: null,
  username: null,
};

export const createGaaStore = (initState: GaaState = defaultInitState) => {
  return createStore<GaaStore>()(
    persist(
      (set, get) => ({
        ...initState,
        setLicense: (licenseNumber: number) => {
          set((state) => ({
            ...state,
            license: licenseNumber >= 0 && licenseNumber <= 2 ? licenseNumber : 0,
          }));
        },
        setLider: (liderNumber: number) => {
          set((state) => ({
            ...state,
            lider: liderNumber >= 0 && liderNumber <= 2 ? liderNumber : 0,
          }));
        },
        setLad: (ladNumber: number) => {
          set((state) => ({
            ...state,
            lad: ladNumber >= 0 && ladNumber <= 2 ? ladNumber : 0,
          }));
        },
        setTheme: (theme: string) => {
          set((state) => ({
            ...state,
            theme: theme,
          }));
        },
        switchTheme: () => {
          set((state) => ({
            ...state,
            theme: get().theme === 'dark' ? 'light' : 'dark',
          }));
        },
        setToken: (token: string) => {
          set((state) => ({
            ...state,
            token: token,
          }));
        },
        setUsername: (username: string) => {
          set((state) => ({
            ...state,
            username: username,
          }));
        },
        login: (username, token) => {
          set((state) => ({
            ...state,
            username: username,
            token: token,
          }));
        },
        logout: () => {
          set((state) => ({
            ...state,
            username: null,
            token: null,
          }));
        },
      }),
      {
        name: 'gaa-store',
        storage: createJSONStorage(() => localStorage),
        skipHydration: true,
      },
    ),
  );
};
