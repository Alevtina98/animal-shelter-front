import { FC } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";
import {
  AnimalKeyType,
  GenderType,
  GenusType,
  StatusType,
} from "@/pages/animals/components/bodyContent/AnimalsContent";

interface IAnimalCardProps {
  animalKey: AnimalKeyType;
  name: string;
  photoPath?: string;
  description?: string;
  color?: string;
  vkLink?: string;
  status?: StatusType;
}

export const AnimalCard: FC<IAnimalCardProps> = ({
  animalKey,
  photoPath,
  name,
  status,
  description,
  color,
  vkLink,
}) => {
  return (
    <div className={styles.blogCard} key={animalKey}>
      <div className={styles.meta}>
        <img className={styles.photo} src={photoPath}></img>
        <ul className={styles.details}>
          <li className={styles.author}>
            <a
              href="https://vk.com/market-38870510"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </li>
          {status ? <li className="date">Статус: {status}</li> : null}
          {color ? <li className="date">Окрас: {color}</li> : null}

          {/* <li className="date">
            <a href="https://vk.com/market-38870510?w=product-38870510_6667015%2Fquery">
              ВК
            </a>
          </li>*/}
        </ul>
      </div>
      {/*<div className={clsx("flex-fill", styles.description)}>
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="d-flex flex-column">
            <div className="d-flex text-nowrap flex-row align-bottom ">
              <h1>{name}</h1>
               <h1 className="status">{status}</h1>
            </div>
            <p>{description}</p>
          </div>
           <p className="d-flex read-more justify-content-end w-100">
          <a href="#">Подробнее</a>
        </p>{" "}
        </div>
      </div>*/}
    </div>
  );
};

export default AnimalCard;
