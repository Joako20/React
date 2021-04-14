
import Item from '../Item/Item'

function ItemList({ items }) {
    console.log(items)

    return <>
        {items.map((item)=>{return<>
            <Item key={item.id} item={item}/> 
            </>
        } )}
    </>


    
    
    
}
   
export default ItemList