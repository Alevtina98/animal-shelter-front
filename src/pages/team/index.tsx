import { FC, memo, useEffect, useState } from "react";
import { Carousel, Col, Container, Navbar, Row, Button } from "react-bootstrap";
import * as team from "../../../public/team.json";
import styles from "@/component/card/Card.module.css";
import teamStyles from "@/styles/Team.module.css";
import clsx from "clsx";
import animalsStyles from "@/styles/AnimalHeader.module.css";
import pageHeaderStyles from "@/styles/PageHeader.module.css";
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
    <div className={pageHeaderStyles.animalContainer}>
    <Navbar
        expand="sm"
        collapseOnSelect
        sticky="top"
        variant="dark"
        className={pageHeaderStyles.panel}
      >
        <Container fluid className="d-flex w-100 justify-content-between">
          <Navbar.Collapse
            id="page-navbar-nav-sum"
            className="justify-content-start"
          >
            <Navbar.Text><h2>{info?.title}</h2></Navbar.Text>
          </Navbar.Collapse>

         <Button
         className={pageHeaderStyles.mainButton}
            variant="outline-light"
            href=""
          
          >
            Фонд
          </Button>
       
        </Container>
      </Navbar>
      <Container
          className={clsx(
            "container overflow-auto flex-fill d-flex",
            animalsStyles.cardContainer
          )}
          >
          <div className="overflow-auto h-100 position-absolute">
            <div  className={clsx("", styles.mainTextCard)}>
              <div className={clsx("h-100", teamStyles.card)}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                {info?.descriptionText}
                
                <Button
                  className={styles.mainButton}
                  variant="danger"
                  href="/animals"
                 style={{marginBottom: "6px", marginRight: "6px", marginTop: "6px"}}
                >
                 Подопечные
                </Button>
               
                 
                </div>
               
                <div className={styles.blogCard}>
                  <img className={styles.photo} src={info?.img}></img>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                styles.authorTextCard,
                "w-100 d-flex  justify-content-end"
              )}
            >
            {info?.quoteList[0].text}
            </div>
          </div>
      </Container>
    </div>
      
      
    </>
  );
};
export default memo(Team);
