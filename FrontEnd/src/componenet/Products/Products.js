import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

function Products(props) {
    console.log(props);
    return (
        <>
            <div className="card">
                <img src={props.product.image} alt={props.product.title}></img>
                <p>{props.product.description}</p>
                <h6>Price: {props.product.price}</h6>
                <div className='button1'>
                <Link to={`/details/${props.product._id}`}>
                <button className='button3' >Details</button>
                </Link>
                <button className='button2' onClick={() => { alert('product added to cart') }}>add to cart</button>
                </div>
                </div>
        </>
    );
}

export default Products;
