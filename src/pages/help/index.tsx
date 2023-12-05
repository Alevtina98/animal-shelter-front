import { FC, memo, useState, useMemo } from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import clsx from "clsx";

import styles from "@/styles/PageHeader.module.css";
import cardStyles from "@/pages/animals/components/bodyContent/card/Card.module.css";
import * as help from "./help.json";

type SberInfoType = "Номер карты Сбербанка" | "прикреплена к номеру" | "владелец";
interface IHelpInfo {
  "title": string,
  "qrImage": string,
  "posterImg": string,
  "finText": string,
  "labelText": string,
  "sber": {
    "Номер карты Сбербанка": string,
    "прикреплена к номеру": string,
    "оформлена на": string,
    "владелец": string
  },
  "else": {
    "Номер ГТ": string,
    "Яндекс деньги": string,
    "Киви": string,
    "Красная кнопка": string
  }
}

const Help: FC = () => {
  const [activeKey, setActiveKey] = useState<string>("donations");
  const helpInfo = useMemo<IHelpInfo>(()=>{
    return help
  }, [help])
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
              <img src={helpInfo?.posterImg} className="p-0"></img>
            </Row>
            <Row className="overflow-auto h-100 position-absolute">
              <div
                className={clsx(
                  cardStyles.mainTextCard,
                  cardStyles.helpFinText
                )}
              >
                {helpInfo.finText}
                <Container className="mb-3 d-flex flex-row flex-wrap">
                  <img
                    className="w-25 p-0"
                    src={help.qrImage}
                    style={{ minWidth: "200px" }}
                  ></img>
                  <Container className="d-flex flex-column h-100 justify-content-between align-items-start">
                    <div className="mt-3">
                       <Row>
                          Номер карты Сбербанка: {helpInfo.sber["Номер карты Сбербанка"]} 
                       </Row>
                       <Row>
                          прикреплена к номеру: {helpInfo.sber["прикреплена к номеру"]} 
                       </Row>
                       <Row>
                          (оформлена на {helpInfo.sber["оформлена на"]})
                       </Row>
                    </div>

                    <div className="mt-3">
                      {Object.keys(help.else).map((key) => (
                        <Row>
                          {key}: {helpInfo.else[key]}
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
