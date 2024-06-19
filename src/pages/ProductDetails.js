import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../components/Api';
import Counter from "../components/Counter.js";
import ImageGallery from '../components/ImageGallery.js'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flexbox mt-3 mb-3">

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


    </div>
   
  );
};

export default ProductDetails;
