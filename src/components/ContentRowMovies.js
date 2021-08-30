import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */



let ProductosEnDB = {
    title: 'Productos en base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa fa-shopping-cart'
}



let UsuariosEnDB = {
    title:' Usuarios en base de datos', 
    color:'success', 
    cuantity: '79',
    icon:'fa fa-user'
}



let CategoriasEnDB = {
    title:'Categorias en base de datos' ,
    color:'warning',
    cuantity:'49',
    icon:'fa fa-list'
}

let cartProps = [ProductosEnDB, UsuariosEnDB, CategoriasEnDB];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;