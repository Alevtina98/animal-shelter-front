import { FC, memo, useState } from "react";
import { Nav, Tabs } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Layout from "@/component/Layout";
import AnimalCardGrid from "@/pages/animals/AnimalCardGrid";
import styles from "@/styles/PageHeader.module.css";
import clsx from "clsx";

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
          <div className="w-100 d-flex justify-content-right m-5">
            <img
              className="w-25"
              src="img/qr.png"
              style={{ minWidth: "250px" }}
            ></img>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
export default memo(Help);
