import { FC, memo } from "react";

import styles from "./IconCard.module.css"

export interface ITeamContentProps {
    imgRef: string;
}
const IconCard: FC<ITeamContentProps> = ({imgRef}) => {
    return (
        <div className={styles.container} >
            <img className={styles.icon} src={imgRef} ></img>
        </div>


    );
};

export default memo(IconCard);
