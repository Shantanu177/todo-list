import React, { useState } from 'react'
import useStore  from '../centralStore';
import { TStoreState } from '../ITypes/TStoreState';
import type { IList } from '../ITypes/IList';

const AddItem = () => {
    const [inputVal,setInputVal] =useState<string>('')
    const {addItem , list} = useStore((state : TStoreState  ) => state);
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputVal(e.currentTarget.value);
    }
    const addItemTolist = () =>{
        const payload :IList={
            idx: list.length + 2,
            item: inputVal,
            completed: false
        } 
        addItem(payload);
    }
  return (
    <div>
        <input type="text" value={inputVal} onChange={(e) => handleChange(e)} name='todo-item'/>
        <button onSubmit={addItemTolist}  disabled={!inputVal}>Add to list</button>
    </div>
  )
}

export default AddItem