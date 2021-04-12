
import Button from '@material-ui/core/Button';
import './ItemCount.css'
// export default class ItemCount extends Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         count : 1,
    //         amount:5,
    //         stock: true
    //     };

    // };

    // preventStockNull = ()=>{
    //     if(this.state.stock == false){
    //         this.state.count = 0
    //     }
    // }


    // handleIncrement = ()=>{
    //     if(this.state.stock == false || this.state.count == this.state.amount){
    //     }
    //     else{
    //         this.setState({count: this.state.count + 1})
    //     }
    // };

    // handleDecrement = ()=>{
    //     if(this.state.stock == false || this.state.count == 0){
    //     }
    //     else{
    //         this.setState({count: this.state.count - 1})
    //     }
    // };  

//     render() {
//         this.preventStockNull()
//         return (
//             <div className="contador-container">
//                 <p>{this.state.count}</p>
//                 <div className="button-container">
//                     <Button variant="contained" color="primary" onClick={this.handleDecrement}>-</Button>
//                     <Button variant="contained" color="primary" onClick={this.handleIncrement}>+</Button>
//                 </div>
//             </div>
//         )
//     }
// }

function ItemCount({stockNum, initial, stockE,}) {
    
    let preventStockNull = ()=>{
        if(stockE == false){
           return "0"
        }
        else{
            return initial
        }
    }

    let handleIncrement = ()=>{
        if(stockE == false || initial == stockNum){
        }
        else{
            let parrafo = document.getElementById("cantidad")
            initial = Number(initial) + 1
            parrafo.innerHTML=`${initial}`
            
        }
    };

    let handleDecrement = ()=>{
        if(stockE == false || initial == 0){
        }
        else{
            let parrafo = document.getElementById("cantidad")
            initial = Number(initial) - 1
            parrafo.innerHTML=`${initial}`
            
        }
    };

    let add = ()=>{
        if(stockE == false){
            let confirm = document.getElementById("confirm")
            confirm.innerHTML=`No hay stock!!!`
        }
        else{
        let confirm = document.getElementById("confirm")
        confirm.innerHTML=`Se han agregado ${initial} unidades`
        }
        
    }

    return <>
    <div className="contador-container">
        <p id="cantidad">{preventStockNull()}</p>
        <div className="button-container">
            <Button variant="contained" color="primary" onClick={handleDecrement}>-</Button>
            <Button variant="contained" color="primary" onClick={handleIncrement}>+</Button>
        </div>
        <Button id="prodUnidades" variant="contained" color="primary" onClick={add}>Agregar al carrito</Button>
        <p id="confirm"></p>
    </div>
    </>

}
   
export default ItemCount;

   