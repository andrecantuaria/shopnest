import React, { useEffect, useState } from 'react';
import api from '../components/Api'; 
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data.sort(() => Math.random() - 0.5).slice(0, 30));
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
    <div className='container flex mb-3 '>
      <div className="container-product">
        <div className="featured">
          <h2 className="mt-3">Our products</h2>
        </div>
        <div className="product-grid">
        {products.map((product) => (
              <div className="product-item" key={product.productId}>
                <Link to={`/products/${product.productId}`}>
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

export default Products;
