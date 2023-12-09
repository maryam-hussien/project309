import React, { useState, useRef } from 'react';
import './Details.css';
import i1 from "../../assets/Images/Image-1.jpg";
import i from "../../assets/Images/Image-5.jpg";
import i2 from "../../assets/Images/Image-2.jpg";
import { Link } from 'react-router-dom';

const Details = () => {
  const [products] = useState([
    {
      "id": 1,
      "title": "ABSTRACT with FLUID ACRYLICS Artwork✨",
      "src": [i, i2, i1],
      "price": 2800,
      "description": [
        "ABSTRACT with FLUID ACRYLICS Artwork✨",
        "🎨Working with Chasmere palette, Mint green and Golden Leaves",
        "s•Size: 100*60 cm",
        "•Materials: Marie’s Acrylics on wooden plate"
      ],
      "count": 1
    }
  ]);

  const [reviews] = useState([
    {
      id: 1,
      username: "JohnDoe",
      comment: "Amazing artwork! I love the colors and the abstract style.",
      rating: 5
    },
    {
        id: 2,
        username: "Maryam",
        comment: "Amazing artwork! I love the colors and the abstract style.",
        rating: 3
      },
    // Add more reviews as needed
  ]);

  const myRef = useRef(null);

  return (
    <>
      <div className='Details3'>
        {products.map(item => (
          <div className='details3' key={item.id}>

            <div className='img-product2'>
              <img src={item.src[0]} alt=''></img>
            </div>

            <div className='box2'>
              <div className='row2'>
                <div><h2>{item.title} </h2></div>
              </div>
              <div className="price"><h5 >{item.price}LE</h5></div>
              <p className='dis2'>{item.description.join('\n')}</p>

              <div className='thumb2' ref={myRef}>
                <div><button className='bmax'>+</button></div>
                <div className='countb'> {item.count}</div>
                <div><button className='bmin'> -</button></div>
              </div>

              <div className='add-card2'>
                <div><Link to="/cart"><button className='ato'>Add To Card</button> </Link></div>
                <div><Link to="/cart/checkout"><button className='bto'> Buy Now</button> </Link></div>
              </div>
            </div>

            <div className='reviews'>
              <h3>User Reviews</h3>
              <ul className='review-list'>
                {reviews.map(review => (
                  <li key={review.id} className='review-item'>
                    <div>
                      <strong>{review.username}:</strong> {review.comment}
                    </div>
                    <div className='star-rating'>
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} role='img' aria-label='star'>⭐</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Details;
