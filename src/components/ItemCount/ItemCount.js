import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './ItemCount.css'
export default class ItemCount extends Component {
    constructor(){
        super();

        this.state = {
            count : 1,
            amount:5,
            stock: true
        };

    };

    si = ()=>{
        if(this.state.stock == false){
            this.state.count = 0
        }
    }


    handleIncrement = ()=>{
        if(this.state.stock == false || this.state.count == this.state.amount){
        }
        else{
            this.setState({count: this.state.count + 1})
        }
    };

    handleDecrement = ()=>{
        if(this.state.stock == false || this.state.count == 0){
        }
        else{
            this.setState({count: this.state.count - 1})
        }
    };  

    render() {
        this.si()
        return (
            <div className="contador-container">
                <p>{this.state.count}</p>
                <div className="button-container">
                    <Button variant="contained" color="primary" onClick={this.handleDecrement}>-</Button>
                    <Button variant="contained" color="primary" onClick={this.handleIncrement}>+</Button>
                </div>
            </div>
        )
    }
}


   