import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

function CardDetail(props) {
    const[showItemCount, setShowItemCount] = useState(true)
    // let estadoCart = false;
    function handleAddToCart (count){
        alert(`Agregaste al carrito ${count} productos`)
        setShowItemCount(false);
        
    }

    return (
        <div className='cardDetailContainer'>
            <div className='box'> <img src={props.img} alt="imagen detalle" /></div>
            <div className='box'>
                <h1>{props.tittle}</h1>
                <p>{props.detail}</p>
                <p>{props.paginas}</p>n
                <h3>{props.autor}</h3>

                { showItemCount ? <ItemCount unidadInicial={1} stock={props.stock} onAddToCart={handleAddToCart}/> : <Link to="/cart"> <button>Finalizar compra</button></Link>}
            </div>                          
        </div>
    )
}

export default CardDetail