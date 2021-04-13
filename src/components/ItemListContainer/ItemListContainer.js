
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props){
    return <>
    <h1>{props.greetings}</h1>
    <ItemList/>
    </>

}

export default ItemListContainer