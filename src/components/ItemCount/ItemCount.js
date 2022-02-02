import React, {useState} from "react";
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}){

    const [valor, setValor]= useState(initial);

    function aumentarCantidad(){
        if(valor<stock){
            setValor(valor+1);
        }
    }

    function disminuirCantidad(){
        if(valor>0){
            setValor(valor-1);
        }
    }

    return (
        <div>
            <div className="input-group">
                <input type="text" className="form-control" value={valor}/>
                <button className="btn btn-outline-secondary" type="button" onClick={aumentarCantidad}>+</button>
                <button className="btn btn-outline-secondary" type="button" onClick={disminuirCantidad}>-</button>
            </div>
            <button className="btn btn-primary" onClick={onAdd}>Agregar items</button>

        </div>

    );
};