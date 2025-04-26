import React from "react";
import useStore from "../centralStore";
import { TStoreState } from "../ITypes/TStoreState";
import type { IList } from "../ITypes/IList";

interface RemoveitemProps {
  item: IList;
}

const Removeitem = ({ item }: RemoveitemProps) => {
  const { removeItem } = useStore((state: TStoreState) => state);
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    removeItem(item);
  };
  return (
    <div onClick={handleRemove} className="col-span-1 text-red-800">
      X
    </div>
  );
};

export default Removeitem;
