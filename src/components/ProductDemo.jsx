// ProductDemo.jsx
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDemo = () => {
  return (
    <section className="product-demo" id="demo">
      <h2>Product Demo</h2>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={true}
      >
        <div>
          <img src="/images/1.jpeg" alt="Screenshot 1" />
        </div>
        <div>
          <img src="/images/2.jpeg" alt="Screenshot 2" />
        </div>
        <div>
          <img src="/images/3.jpeg" alt="Screenshot 3" />
        </div>
      </Carousel>
    </section>
  );
};

export default ProductDemo;
