import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../components/Api';

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
    <div className="container flexbox mt-3">

      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <div className="product-details-content">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="price">${product.price} CAD</p>
          <button className="primary-btn">Add to Cart</button>
        </div>
      </div>


    </div>
   
  );
};

export default ProductDetails;
