
import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos componen nuestra oferta",
    valor: 31,
    icono: "fas fa-wine-bottle",
}

let type ={
    color:   "success",
    titulo: "Categorías vas a poder elegur",
    valor: 6,
    icono: "fas fa-clipboard-list",
}

let user = {
    color:   "primary",
    titulo: "Usuarios confian en nosotros",
    valor: 15,
    icono: "fas fa-user",
}

let varietals = {
    color:   "success",
    titulo: "Varietales",
    valor: 8,
    icono: "fas fa-window-restore",
}

let winemaker = {
    color:   "primary",
    titulo: "Enólogos confían en nosotros",
    valor: 25,
    icono: "fas fa-wine-glass",
}

let producers = {
    color:   "success",
    titulo: "Productores nos acompañan",
    valor: 20,
    icono: "fas fa-smile-wink",
}

let cardProps = [productInDataBase,type,user, varietals,winemaker,producers];


function Panels(){

    
    return (
        <React.Fragment>       
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default Panels;