import React, { useState, useEffect } from "react";
import itemsPromise from "../productos/productos";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        itemsPromise.then((res)=>{
            console.log(res)
            setItem(res[0])
        })

    }, [])
    console.log(item)
    
    return <>
    {<ItemDetail item={item}/>}
    </>
}

export default ItemDetailContainer;