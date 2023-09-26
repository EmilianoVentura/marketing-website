import React from 'react';
import FeatureCard from '../components/molecules/FeatureCard';
import '../styles/FeaturesPage.css';

const FeaturesPage = () => {
  const productsData = [
    {
      imageSrc: '../img/celular.jpg',
      productName: 'Producto 1',
      description: 'Descripción del Producto 1. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/celular.jpg',
      productName: 'Producto 2',
      description: 'Descripción del Producto 2. Lorem ipsum dolor sit amet.',
      rating: 4.0,
    },
    {
      imageSrc: '../img/celular.jpg',
      productName: 'Producto 3',
      description: 'Descripción del Producto 3. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/celular.jpg',
      productName: 'Producto 4',
      description: 'Descripción del Producto 4. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/laptop.jpg',
      productName: 'Producto 5',
      description: 'Descripción del Producto 5. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/laptop.jpg',
      productName: 'Producto 6',
      description: 'Descripción del Producto 6. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/laptop.jpg',
      productName: 'Producto 7',
      description: 'Descripción del Producto 7. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/laptop.jpg',
      productName: 'Producto 8',
      description: 'Descripción del Producto 8. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/smartwatch.jpg',
      productName: 'Producto 9',
      description: 'Descripción del Producto 9. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/smartwatch.jpg',
      productName: 'Producto 10',
      description: 'Descripción del Producto 10. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/smartwatch.jpg',
      productName: 'Producto 11',
      description: 'Descripción del Producto 11. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/smartwatch.jpg',
      productName: 'Producto 12',
      description: 'Descripción del Producto 12. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/teclado1.jpg',
      productName: 'Producto 13',
      description: 'Descripción del Producto 13. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/teclado1.jpg',
      productName: 'Producto 14',
      description: 'Descripción del Producto 14. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/teclado1.jpg',
      productName: 'Producto 15',
      description: 'Descripción del Producto 15. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/teclado1.jpg',
      productName: 'Producto 16',
      description: 'Descripción del Producto 16. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/play.jpg',
      productName: 'Producto 17',
      description: 'Descripción del Producto 17. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/play.jpg',
      productName: 'Producto 18',
      description: 'Descripción del Producto 18. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/play.jpg',
      productName: 'Producto 19',
      description: 'Descripción del Producto 19. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
    {
      imageSrc: '../img/play.jpg',
      productName: 'Producto 20',
      description: 'Descripción del Producto 20. Lorem ipsum dolor sit amet.',
      rating: 4.5, 
    },
  ];

  return (
    <div className="features-page">
      <h1>Productos Destacados</h1>
      <div className="product-grid">
        {productsData.map((product, index) => (
          <FeatureCard
            key={index}
            imageSrc={product.imageSrc}
            productName={product.productName}
            description={product.description}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
