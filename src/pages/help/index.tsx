import { FC, memo } from "react";
import { Nav } from "react-bootstrap";
import Layout from "@/component/Layout/Layout";
import CatCards from "@/pages/animals/CatCards";
import styles from "@/styles/PageHeader.module.css";

const Help: FC = () => {
  return (
    <div>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="link-5"
        fill
        className={styles.tabs}
      >
        {/*кураторство/уборка/водитель/посылки/пожертвования*/}

        <Nav.Item>
          <Nav.Link eventKey="link-1">Кураторство</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">Передержка</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Поездки</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Реклама</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Посылки </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Пожертвования </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default memo(Help);
