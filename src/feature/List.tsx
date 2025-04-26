import useStore from "../centralStore";
import { TStoreState } from "../ITypes/TStoreState";
import type { IList } from "../ITypes/IList";
import Removeitem from "./Removeitem";
import MarkItem from "./MarkItem";

const List = () => {
  const list = Array.from(useStore((state: TStoreState) => state.list));
  if (!list.length) return <h3 className="text-center">No Items</h3>;
  return (
    <div>
      <ul>
        {list.map((item: IList, idx: number) => (
          <div className="w-full" key={idx}>
            <li className="grid-rows-1 grid-cols-3 grid">
              <MarkItem item={item} />
              <div
                className={`col-span-1 text-indigo-50 ${
                  item.completed ? "line-through" : ""
                }`}
              >
                {item.item}
              </div>
              <Removeitem item={item} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
