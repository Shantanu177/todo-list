import { create } from "zustand";
import type { IList } from "./ITypes/IList";
import type { TStoreState } from "./ITypes/TStoreState";

const useStore = create<TStoreState>((set) => ({
  list: new Set(),
  addItem: (item: IList) =>
    set((state) => ({
      list: new Set([...state.list, item]),
    })),

  removeItem: (item: IList) =>
    set((state) => {
      const newList = new Set(state.list);
      newList.delete(item);
      return { list: newList };
    }),

  updateItem: (item: IList) =>
    set((state) => {
      const newList = new Set(
        [...state.list].map((i) => (i.idx === item.idx ? item : i))
      );
      return { list: newList };
    }),
}));

export default useStore;
