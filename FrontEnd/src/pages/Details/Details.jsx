import React from 'react';
import './Details.css';
import i1 from "../../assets/Images/Image-1.jpg";
import i from "../../assets/Images/Image-5.jpg";
import i2 from "../../assets/Images/Image-2.jpg";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        products: [
            {
                "id": 1,
                "title": "ABSTRACT with FLUID ACRYLICS Artwork✨",
                "src": [i, i2, i1],
                "price": 2800,
                "description": [
                    "ABSTRACT with FLUID ACRYLICS Artwork✨",
                    "🎨Working with Chasmere palette, Mint green and Golden Leaves",
                    "s•Size : 100*60 cm ",
                    "•Materials: Marie’s Acrylics on wooden plate"
                ],
                "count": 1
            }
        ],
        index: 0
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            products: prevState.products.map((product, idx) => {
                if (idx === prevState.index) {
                    return { ...product, count: product.count + 1 };
                }
                return product;
            })
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            products: prevState.products.map((product, idx) => {
                if (idx === prevState.index && product.count > 1) {
                    return { ...product, count: product.count - 1 };
                }
                return product;
            })
        }));
    };

    render() {
        const { products, index } = this.state;
        const item = products[index];

        return (
            <div className='Details3'>
                <div className='details3' key={item.id}>
                    <div className='img-product2'>
                        <img src={item.src[0]} alt='' />
                    </div>
                    <div className='box2'>
                        <div className='row2'>
                            <div><h2>{item.title}</h2></div>
                        </div>
                        <div><h5>{item.price}LE</h5></div>
                        <p className='dis2'>{item.description.join('\n')}</p>
                        <div className='thumb2' ref={this.myRef}>
                            <div><button className='bmax' onClick={this.handleIncrement}>+</button></div>
                            <div className='countb'>{item.count}</div>
                            <div><button className='bmin' onClick={this.handleDecrement}>-</button></div>
                        </div>
                        <div className='add-card2'>
                            <div><button className='ato'>Add To Card</button></div>
                            <div><button className='bto'> Buy Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;