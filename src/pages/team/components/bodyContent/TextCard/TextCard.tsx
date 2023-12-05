import { FC, memo } from "react";

import styles from "./TextCard.module.css"

export interface ITeamContentProps {
    text?: string;
}
const TextCard: FC<ITeamContentProps> = ({text}) => {
    if (!text) return null;
    return (
            <div className={styles.card}>
                <div className={styles.scrollContainer}>
                    {text}
                </div>
            </div>

    );
};

export default memo(TextCard);
