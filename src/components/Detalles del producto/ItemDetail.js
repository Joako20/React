function ItemDetail({ item }) {
 
    return <>
    <div>
        <h2>{item.title}</h2>
        <img src={item.img} alt={item.title}/>
        <h3>{item.descripcion}</h3>
        <h3>${item.precio}</h3>
    </div>
  </>;
   
}
  
export default ItemDetail