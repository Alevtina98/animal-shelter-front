import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "@/styles/Card.module.css";
interface ICatCardsProps {
  list: any[];
}

export const CatCards: FC<ICatCardsProps> = ({ list }) => {
  return (
    <div className={styles.cards}>
      {list?.map((item, index) => (
        <Card key={item.id} className="col-sm-6">
          <Card.ImgOverlay></Card.ImgOverlay>
          <Card.Img variant="top" src={`${item.mediaCard.photo[0]}`} />
          <Card.Body className="p-fixed">
            <Card.Title>
              {item.nameList[0]}{" "}
              <span className="text-secondary"> {item.passport.status}</span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{item.mediaCard.desc}</Card.Text>
            <Card.Link className="float-end">
              <Button variant="danger">Подробнее</Button>
              {/* <a href="https://www.instagram.com/aliceland_cats/">
                <img
                  src="/icon/bookmark.svg"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                />
              </a>*/}
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CatCards;
