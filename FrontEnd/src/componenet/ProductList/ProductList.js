import Products from "../Products/Products";
import './ProductList.css';
import axios from "axios";
import { useEffect, useState } from "react";
function ProductList(){
    const [data, setdata] = useState(null)
    const getData = async () =>{
        try {
            const response = await axios.get('http://localhost:5000/item/all');
            console.log(response);
            setdata(response.data)
          } catch (error) {
            console.error(error.message);
          }
    }
useEffect(() => {
    getData();
}, [])

    const product = data?.map((product)=>{
        return(
            <Products    key={product._id} product={product}/>
        )
    })
return(
    <>
     <div className="ProductList">
        <h3>Mixed midea tableau :</h3>
     <div className="row">
     {product}
     </div>

    </div>
   
    </>
   
)
}
export default ProductList;