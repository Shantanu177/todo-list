import { create } from 'zustand'
import type { IList } from './ITypes/IList';
import type { TStoreState } from './ITypes/TStoreState';

const useStore = create<TStoreState>((set) => ({
  list: [],
  addItem: (item: IList) => set((state) => ({ list: [...state.list, item] })),
  removeItem: (idx: number) => set((state) => ({ list: state.list.splice(idx, 1) })),
  updateItem: (updatedItem: IList, idx: number) => set((state) => ({
    list: state.list.map((item, i) => i === idx ? updatedItem : item)
  })),
}));

export default useStore;