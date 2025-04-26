import React, { useState } from "react";
import useStore from "../centralStore";
import { TStoreState } from "../ITypes/TStoreState";
import type { IList } from "../ITypes/IList";

const AddItem = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const { addItem, list } = useStore((state: TStoreState) => state);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputVal(e.currentTarget.value);
  };
  const addItemTolist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let exists = Array.from(list).some((item) => item.item === inputVal);
    if (exists) return;
    else {
      const payload: IList = {
        idx: list.size,
        item: inputVal,
        completed: false,
      };
      addItem(payload);
    }
  };
  return (
    <form>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => handleChange(e)}
        name="todo-item"
        className="p-2.5 m-2 border border-gray-300 rounded"
      />
      <button type="submit" disabled={!inputVal} onClick={addItemTolist}>
        Add to list
      </button>
    </form>
  );
};

export default AddItem;
