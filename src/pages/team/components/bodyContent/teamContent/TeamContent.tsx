import { FC, memo } from "react";

import TextCard from "@/pages/team/components/bodyContent/TextCard/TextCard";
import IconCard from "@/pages/team/components/bodyContent/IconCard/IconCard";

const TEAM_ICON: string = "/img/logo2.png"
const TEAM_TEXT: string = "ЛЮБИМЧИК - команда неравнодушных людей, объединившихся, чтобы помогать бездомным животным. Мы лечим, адаптируем и пристраиваем наших подопечных в добрые руки, взрослых стерилизуем/кастрируем, а также ведём информационно-просветительскую деятельность."

export interface ITeamContentProps {
}

const TeamContent: FC<ITeamContentProps> = () => {
    return (
        <div className="d-flex flex-column w-100 justify-content-between align-items-center">
            <TextCard text={TEAM_TEXT}/>
            <IconCard imgRef={TEAM_ICON}/>
            {/* будет карусель? */}
        </div>
    );
};
export default memo(TeamContent);
