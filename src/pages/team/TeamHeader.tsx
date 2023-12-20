import React, { FC, memo } from "react";
import Navbar from "react-bootstrap/Navbar";

import PageHeader from "@/component/page/pageHeader/PageHeader";
import OutlineButton from "@/component/page/OutlineButton/OutlineButton";
import { FaVk } from "react-icons/fa";

export interface ITeamHeaderProps {}
const TeamHeader: FC<ITeamHeaderProps> = () => (
  <PageHeader
    textElement={<h2 style={{ color: "white" }}> Кто мы? </h2>}
    button={{
      caption: "Мы в СМИ",
      link: "https://rweek.ru/2021/05/28/кошкин-дом-как-помогают-бездомным-ж/",
    }}
  />
);

export default memo(TeamHeader);
