import React from 'react';
import '../styles/HomePage.css';
import Caracteristicas from '../components/molecules/Caracteristicas'; // Importa el componente FeatureCard
import Testimonio from '../components/molecules/Testimonio'; // Importa el componente TestimonialCard

const HomePage = () => {
  const featuresData = [
    { title: 'Durabilidad y resistencia', description: 'Nuestros productos tecnológicos son reconocidos por su excepcional durabilidad y resistencia. Están diseñados para resistir el paso del tiempo y el uso intensivo en diversos entornos. Ya sea que estés en movimiento constante o necesites dispositivos que soporten condiciones adversas, nuestros productos están construidos para durar. Confía en la robustez de nuestros productos para acompañarte en tus aventuras y desafíos diarios.' },
    { title: 'Conectividad avanzada', description: 'En un mundo cada vez más interconectado, ofrecemos productos con conectividad avanzada que te mantienen conectado en todo momento. Desde la rápida conectividad Wi-Fi de alta velocidad hasta la versatilidad de Bluetooth y la capacidad de emparejamiento con dispositivos inteligentes, nuestros productos están diseñados para facilitar tu vida digital. Mantén tus dispositivos conectados y sincronizados de manera eficiente, disfrutando de una experiencia tecnológica sin problemas.' },
    { title: 'Marcas originales', description: 'En UP-Tech, nos enorgullece ofrecer solo productos de marcas originales y de renombre. Valoramos la autenticidad y la calidad tanto como tú. Cada producto que vendemos es genuino y proviene directamente de fabricantes de confianza. Puedes tener la tranquilidad de saber que estás adquiriendo productos legítimos y que no tendrás que preocuparte por productos piratas o de imitación. Tu satisfacción y confianza son nuestra prioridad.' },
  ];

  const testimonialsData = [
    { text: 'UP-Tech ha cambiado mi vida. Sus productos son de alta calidad y el servicio al cliente es excepcional.', author: 'Juan Pérez' },
    { text: 'No puedo creer lo increíbles que son los productos de UP-Tech. ¡Los recomiendo a todos mis amigos!', author: 'María González' },
    { text: 'Compré su último producto y me sorprendió gratamente su rendimiento y calidad. ¡Estoy encantado con la durabilidad y la facilidad de uso!', author: 'Andrea Rodríguez' },
  ];

  return (
    <div className="home-page">
      <header className="header">
        <h1>Bienvenido a UP-Tech</h1>
        <p>Tu fuente confiable de productos tecnológicos.</p>
        <a href="#features" className="cta-button">
          Explora Nuestros Productos
        </a>
      </header>

      <section className="features" id="features">
        <h2>Características Destacadas</h2>
        <div className="feature-cards">
          {featuresData.map((feature, index) => (
            <Caracteristicas
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonios de Clientes Satisfechos</h2>
        <div className="testimonial-cards">
          {testimonialsData.map((testimonial, index) => (
            <Testimonio
              key={index}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
