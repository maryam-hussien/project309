import PrducrsData from "../Products/Products-data";
import Products from "../Products/Products";
import './ProductList.css';
function ProductList(){
    const product =PrducrsData.map((product)=>{
        return(
            <Products    key={product.id} product={product}/>
        )
    })
return(
    <>
     <div className="ProductList">
        <h3>Mixed midea tableau</h3>
     <div className="row">
     {product}
     </div>

    </div>
   
    </>
   
)
}
export default ProductList;