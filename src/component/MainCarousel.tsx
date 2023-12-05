import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";

export interface ICarouselItem {
  index: number,
  name: string
}
export interface ICarouselProps {
  catalog: string;
  format?: string;
  list: ICarouselItem[]
}
const MainCarousel: FC<ICarouselProps> = ({list, format = "jpg",catalog}) => {
  debugger
  list.sort((item1, item2)=> (item1.index-item2.index))
  return (
    <Carousel fade interval={5000} style={{ width: "100%", height: "100%" }}>
      {list.map((item) => (
        <Carousel.Item key={item.index}>
          <img className="d-block w-100 h-100" src={`${catalog}/${item.name}.${format}`} alt="Кот" />
          <Carousel.Caption>
           {/* <h3>Морда {index + 1}</h3>
            <p>Ну очень вредная</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default MainCarousel;
