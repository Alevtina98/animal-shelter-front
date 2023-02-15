import { FC, memo, useState } from "react";
import { Container, Nav, Row, Tabs } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Layout from "@/component/Layout";
import AnimalCardGrid from "@/pages/animals/AnimalCardGrid";
import scrollContainerStyles from "@/styles/AnimalHeader.module.css";
import styles from "@/styles/PageHeader.module.css";
import cardStyles from "@/component/card/Card.module.css";
import clsx from "clsx";
import * as help from "../../../public/help.json";
const Help: FC = () => {
  const [activeKey, setActiveKey] = useState<string>("donations");
  return (
    <div className={styles.panel}>
      <Tabs
        defaultActiveKey="donations"
        id="uncontrolled-tab-example"
        className={styles.tabs}
        fill
        onSelect={(eventKey: any) => {
          setActiveKey(eventKey);
        }}
      >
        <Tab eventKey="curator" title="Кураторство" disabled></Tab>
        <Tab eventKey="hostel" title="Передержка" disabled></Tab>
        <Tab eventKey="travel" title="Поездки" disabled></Tab>
        <Tab eventKey="advertising" title="Реклама" disabled></Tab>
        <Tab eventKey="parcels" title="Посылки"></Tab>
        <Tab eventKey="donations" title="Пожертвования">
          <Container className="position-relative">
            <Row>
              <img src={help?.posterImg} className="p-0"></img>
            </Row>
            <Row className="overflow-auto h-100 position-absolute">
              <div
                className={clsx(
                  cardStyles.mainTextCard,
                  cardStyles.helpFinText
                )}
              >
                {help.finText}
                <Container className="mb-3 d-flex flex-row flex-wrap">
                  <img
                    className="w-25 p-0"
                    src={help.qrImage}
                    style={{ minWidth: "200px" }}
                  ></img>
                  <Container className="d-flex flex-column h-100 justify-content-between align-items-start">
                    <div className="mt-3">
                      {Object.keys(help.sber).map((key) => (
                        <Row>
                          {key}: {help.sber[key]}
                        </Row>
                      ))}
                    </div>

                    <div className="mt-3">
                      {Object.keys(help.else).map((key) => (
                        <Row>
                          {key}: {help.else[key]}
                        </Row>
                      ))}
                    </div>
                  </Container>
                </Container>
                <Container></Container>
              </div>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
};
export default memo(Help);
