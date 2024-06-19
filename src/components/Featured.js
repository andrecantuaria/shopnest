import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './Api'; 

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
   

  <div className='container flex '>
        <div className="container-product">
          <div className="featured">
            <h2 className="mt-3">New arrivals</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-item" key={product.id}>
                <Link to={`/productdetails/${product.id}`}>
                  <div className="product-image-container">
                    <img className="product-image" src={product.image} alt={product.title} />
                  </div>
                  <h3>{truncateText(product.title, 15)}</h3>
                  <p>${product.price} CAD</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>


    
  );
};

export default Featured;