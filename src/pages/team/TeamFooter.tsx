import React, { FC, memo } from "react";
import Navbar from "react-bootstrap/Navbar";

import PageHeader from "@/component/page/pageHeader/PageHeader";
import OutlineButton from "@/component/page/OutlineButton/OutlineButton";
import {FaVk} from "react-icons/fa";
import PageFooter from "@/component/page/pageFooter/PageFooter";

export interface ITeamHeaderProps {
}

const TEAM_FOOTER_TEXT = "Пусть мы не сможем спасти всех, кого бы нам хотелось. Но мы спасаем намного больше, чем те, кто даже не пытаются. (©)";

const TeamFooter: FC<ITeamHeaderProps> = () => (
    <PageFooter text={TEAM_FOOTER_TEXT} />
);

export default memo(TeamFooter);
