import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "@/component/card/Card.module.css";
import clsx from "clsx";

export type AnimalStatusType = "ищет дом" | "дома";
interface IAnimalCardProps {
  key: string;
  photoPath: string;
  name: string;
  status: AnimalStatusType;
  description: string;
  color: string;
  vkLink: string;
}

export const AnimalCard: FC<IAnimalCardProps> = ({
  key,
  photoPath,
  name,
  status,
  description,
  color,
  vkLink,
}) => {
  return (
    <div className="blog-card">
      <div className="meta">
        <img className="photo" src={photoPath}></img>
        <ul className="details">
          <li className="author">
            <a href="https://vk.com/market-38870510?w=product-38870510_6667015%2Fquery">
              {name}
            </a>
          </li>
          <li className="date">Статус: {status}</li>
          <li className="date">Окрас: {color}</li>
          {/* <li className="date">
            <a href="https://vk.com/market-38870510?w=product-38870510_6667015%2Fquery">
              ВК
            </a>
          </li>*/}
        </ul>
      </div>
      <div className="description flex-fill">
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="d-flex flex-column">
            <div className="d-flex text-nowrap flex-row align-bottom ">
              <h1>{name}</h1>
              {/* <h1 className="status">{status}</h1>*/}
            </div>
            <p>{description}</p>
          </div>
          {/* <p className="d-flex read-more justify-content-end w-100">
          <a href="#">Подробнее</a>
        </p>{" "}*/}
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
