import React from 'react';
import './Products.css';

function Products(props) {
    return (
        <>
            <div className="card">
                <h2>{props.product.title}</h2>
                <img src={props.product.image} alt={props.product.title}></img>
                <p>{props.product.description}</p>
                <h6>Price: {props.product.price}</h6>
                <button onClick={()=>{console.log('you are going to bur this product',props.product.price)}}>
                    Details
                    </button>
                  
            </div>
        </>
    );
}

export default Products;
