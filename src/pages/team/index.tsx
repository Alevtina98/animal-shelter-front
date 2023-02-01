import { FC, memo, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import * as team from "../../../public/team.json";

export interface ITeamInfo {
  title: string;
  subTitle: string;
  descriptionText: string;
  helpText: string;
  note: string;
  img: string;
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
      <h2>{info?.title}</h2>
      <div>{info?.descriptionText}</div>
    </>
  );
};
export default memo(Team);
