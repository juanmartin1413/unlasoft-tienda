import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProductos } from '../../api/Api';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}){
    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        getProductos().then(function(productos){
            console.log(productos);
            setProductos(productos);
        })

    },[]);
    function agregarItems(){
        console.log("se agregan items");
    }

    return (
        <div>
            <h1>{greeting}</h1>
            {productos.length>0?<ItemList productos={productos}/>:<p>Cargando...</p>}
            <div className='container-fluid mt-4'>
                <ItemCount stock={5} initial={1} onAdd={agregarItems}/>
            </div>
        </div>

    );
}