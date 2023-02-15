import { FC, memo, useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import * as team from "../../../public/team.json";
import styles from "@/component/card/Card.module.css";
import clsx from "clsx";

export interface ITeamInfo {
  title: string;
  subTitle: string;
  descriptionText: string;
  finText: string;
  helpText: string;
  note: string;
  img: string;
  posterImg: string;
  quoteList: [
    {
      text: string;
      author: string;
    }
  ];
}
const Team: FC = () => {
  const [info, setInfo] = useState<ITeamInfo | null>(null);

  useEffect(() => {
    const loadInfo = async () => {
      /* If file is not selected, then show alert message */
      if (!team) return;
      setInfo(team as ITeamInfo);
    };
    loadInfo().then((r) => {});
  }, [team]);
  return (
    <>
      <Row>
        <h2 className="mb-4">{info?.title}</h2>
      </Row>
      <Container className="overflow-auto h-100 position-absolute">
        <Row className={clsx("", styles.mainTextCard)}>
          {info?.descriptionText}
        </Row>
        <Row
          className={clsx(
            styles.authorTextCard,
            "w-100 d-flex  justify-content-end"
          )}
        >
          {info?.quoteList[0].text}
        </Row>
        <Row className="h-auto">
          <img className={styles.photo} src={info?.img}></img>
        </Row>
      </Container>
    </>
  );
};
export default memo(Team);
