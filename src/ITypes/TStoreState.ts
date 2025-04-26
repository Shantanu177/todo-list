import type { IList } from "./IList";

export type TStoreState = {
  list: Set<IList>;
  addItem: (item: IList) => void;
  removeItem: (idx: IList) => void;
  updateItem: (idx: IList) => void;
};
