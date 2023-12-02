import './Products.css';
function Products(props){
    return(<>
    
     <div className="card">
        <h2>{props.product.title}</h2>
        <img src={props.product.image}></img>
        <p>{props.product.description}</p>
        <h6>price:{props.product.price}</h6>
        <button onClick={()=>{console.log('you are going to bur this product',props.product.price)}}>Details</button>
                    </div>
                    </>
       
    )
}
export default Products;