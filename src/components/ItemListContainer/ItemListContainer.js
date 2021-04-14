import React, { useState, useEffect } from "react";
import itemPromise from '../productos/productos'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props){

    const [prod, setProd] = useState([])

    useEffect(() => {
        itemPromise.then((res)=>{
            setProd(res)
        })
        
    })

    console.log(prod)
    return <>
    <h1>{props.greetings}</h1>
    {prod.length < 1 ? <h1>Cargando...</h1> : <ItemList items={prod} />}
    </>

}

export default ItemListContainer