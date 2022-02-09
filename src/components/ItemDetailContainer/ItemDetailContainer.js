import React, { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import { getProductos } from '../../api/Api';
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer(){
    const [producto, setProducto]= useState();
    
    useEffect(()=>{
        getProductos().then((items)=>{
            setProducto(items.find((i)=>i.id===1));
        });
    }, []);

    return (
        <div className="row">
            <div className="col-4">

            {producto===null || producto===undefined?<p>Cargando..</p>:<ItemDetail producto={producto}/>}
            </div>
        </div>
    );
}