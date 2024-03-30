import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  increment: (n: number) => void;
  decrement: (n: number) => void;
};

export const useCountStore = create<State & Action>((set) => ({
  count: 0,
  increment: (n: number) =>
    set((state: { count: number }) => ({ count: state.count + n })),
  decrement: (n: number) =>
    set((state: { count: number }) => ({ count: state.count - n })),
}));
