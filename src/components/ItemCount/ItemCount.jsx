import React,{useState} from 'react';

export const ItemCount = ({stock}) => {
    const [ItemCount,setItemCount] = useState (1)

    const sumar= () =>{
        if(ItemCount<stock){
            setItemCount(ItemCount+1)
        }
    }

    const restar= () =>{
        if(ItemCount > 1){
            setItemCount(ItemCount-1)
        }
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <input type="text" name="" id="" value={ItemCount}/>
            <button onClick={sumar}>+</button>
        </div>
    )
}