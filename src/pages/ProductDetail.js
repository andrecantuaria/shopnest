import ImageGallery from '../components/ImageGallery.js'
import axios from 'axios';
import { useEffect,React, useState } from 'react';
import Counter from "../components/Counter.js";

function ProductDetail() {
  const [product,setProduct] = useState({});

  useEffect(()=>{
     axios.get('https://fakestoreapi.com/products/1')
        .then(function (response) {
            setProduct(response.data);
        }).catch(function(error){});
    },[]);  
  return (
    <section className='flex-center prod-detail-section'>
        <div className='product-images'>
            <ImageGallery image={product.image}/>
        </div>
        <div className='product-desc'>
            <p className="prod-price">{`$ ${product.price} CAD`}</p>
            <h2 className="prod-title">{product.title}</h2>
            <p className="prod-desc title" >Description </p>
            <p className="prod-desc">{product.description}</p>
            <div className="add-to-cart-section">
              <Counter/>
              <button className="add-to-cart"><i class="fa-solid fa-cart-shopping"/>Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default ProductDetail