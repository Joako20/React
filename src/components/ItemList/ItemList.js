
import Item from '../Item/Item'

function ItemList({ items }) {
    
    items=[
    <Item item={{id:"1", title:"Auriculares", price:"100", pictureUrl:"placeholder"}}/>,
    <Item item={{id:"2", title:"PS4", price:"400", pictureUrl:"placeholder"}}/>,
    <Item item={{id:"3", title:"Mouse", price:"60", pictureUrl:"placeholder"}}/>
    ]

    
    
    return <>
    <ul>
        {items.map((u)=>{return<li>{u}</li>})}
    </ul>
    </>
}
   
export default ItemList