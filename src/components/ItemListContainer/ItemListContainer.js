import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({greeting}){

    function agregarItems(){
        console.log("se agregan items");
    }

    return (
        <div className='container-fluid mt-4'>
            <ItemCount stock={5} initial={1} onAdd={agregarItems}/>
        </div>

    );
}