import React, {FC, memo} from "react";
import clsx from "clsx";


import styles from "@/styles/AnimalHeader.module.css";
export interface IPageBodyProps {
    contentElement: JSX.Element;
}

const PageBody: FC<IPageBodyProps> = ({contentElement}) => (
    <div
        className={clsx(
            "container overflow-auto flex-fill d-flex justify-content-between ",
                styles.cardContainer
        )}
    >
        {contentElement}
    </div>
);

export default memo(PageBody);