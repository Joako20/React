function Item({ item }) {
    return <>
    <div>
        <ul>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>${item.price}</li>
            <li>{item.pictureUrl}</li>
        </ul>
    </div>
    </>
}
   
export default Item