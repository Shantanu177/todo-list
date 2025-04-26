import type { IList } from './IList';

export type TStoreState = {
  list: IList[];
  addItem: (item: IList) => void;
  removeItem: (idx: number) => void;
  updateItem: (updatedItem: IList, idx: number) => void;
};