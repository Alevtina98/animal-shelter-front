import { FC, memo, useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import * as team from "../../../public/team.json";
import styles from "@/component/card/Card.module.css";

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
    <Container>
      <Row>
        <h2 className="mb-4">{info?.title}</h2>
        <div className="h-100 w-100 d-flex flex-column justify-content-between">
          <div></div>
        </div>
      </Row>
      <Row>
        <div className="mb-4">{info?.descriptionText}</div>
      </Row>
      <Row>
        <div className="mb-4">{info?.finText}</div>
      </Row>
      <Row>
        <img src={info?.posterImg}></img>
      </Row>
    </Container>
  );
};
export default memo(Team);
