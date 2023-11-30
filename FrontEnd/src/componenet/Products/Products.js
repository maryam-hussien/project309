import React from 'react';
import './Products.css';

function Products(props) {
    return (
        <>
            <div className="card">
                <img src={props.product.image} alt={props.product.title}></img>
                <p>{props.product.description}</p>
                <h6>Price: {props.product.price}</h6>
<<<<<<< HEAD
                <div className='button1'>
          
                <button className='button3' onClick={() => { console.log('You are going to buy this product', props.product.price) }}>Details</button>
                <button className='button2'>add to cart</button>
                </div>
                </div>
=======
                <button onClick={()=>{console.log('you are going to bur this product',props.product.price)}}>
                    Details
                    </button>
                  
            </div>
>>>>>>> 7828b32024580bed439ffd6b5b4734f28eeb9721
        </>
    );
}

export default Products;
