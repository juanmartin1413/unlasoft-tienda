import "../data/productos.json";

const productos= require('../data/productos.json');
const promesa= new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve(productos);
    },2000);
});

function getProductos(){
    return promesa;
}

export{
    getProductos
}