import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";

const MainCarousel: FC = () => {
  const arr = [
    { id: 1, ref: "/img/cat1.jpg" },
    { id: 2, ref: "/img/cat2.jpg" },
  ];
  return (
    <Carousel fade interval={5000} style={{ width: "100%", height: "100%" }}>
      {arr.map((item, index) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100 h-100" src={`${item.ref}`} alt="Кот" />
          <Carousel.Caption>
            <h3>Морда {index + 1}</h3>
            <p>Ну очень вредная</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default MainCarousel;
