import React from 'react'
import useStore  from '../centralStore';
import { TStoreState } from '../ITypes/TStoreState';
import type { IList } from '../ITypes/IList';

const List = () => {
    const list = useStore((state : TStoreState  ) => state.list);
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {list.map((item : IList, idx : number) => (
                <li key={idx}>{item.item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List