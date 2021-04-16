

import { Link } from "@material-ui/core"

function Item({ item }) {  
  return <>
  <div>
  <h2>{item.title}</h2>
      <div>
        <img src={item.img} alt={item.title}/>
        <Link>Ver Mas</Link>
      </div>
  </div>
  </>
}
   
export default Item

