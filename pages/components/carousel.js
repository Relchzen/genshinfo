import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// ...

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={carouselImage1} alt="Carousel Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={carouselImage2} alt="Carousel Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={carouselImage3} alt="Carousel Image 3" />
        <p className="legend">Legend 3</p>
      </div>
      {/* Add more carousel items as needed */}
    </Carousel>
  );
};
