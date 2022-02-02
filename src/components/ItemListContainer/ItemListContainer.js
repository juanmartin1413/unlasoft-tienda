import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({greeting}){

    function agregarItems(){
        console.log("se agregan items");
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <div className='container-fluid mt-4'>
                <ItemCount stock={5} initial={1} onAdd={agregarItems}/>
            </div>
        </div>

    );
}