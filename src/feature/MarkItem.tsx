import React from "react";
import useStore from "../centralStore";
import { TStoreState } from "../ITypes/TStoreState";
import type { IList } from "../ITypes/IList";

interface RemoveitemProps {
  item: IList;
}

const MarkItem = ({ item }: RemoveitemProps) => {
  const { updateItem } = useStore((state: TStoreState) => state);
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    let payload: IList = {
      ...item,
      completed: !item.completed,
    };
    updateItem(payload);
  };
  return (
    <label className="checkbox-container" onClick={handleRemove}>
      <input type="checkbox" className="hidden" checked={item.completed} />
      <span className="custom-checkbox"></span>
    </label>
  );
};

export default MarkItem;
