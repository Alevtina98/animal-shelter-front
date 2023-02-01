import { FC, useEffect, useState } from "react";

import styles from "@/styles/AnimalHeader.module.css";
import AnimalCard from "@/component/card/AnimalCard";
import clsx from "clsx";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
interface ICatCardsProps {
  list: any[];
}
function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

export const AnimalCardGrid: FC<ICatCardsProps> = ({ list }) => {
  return (
    <div
      className={clsx(
        "container overflow-auto flex-fill d-flex",
        styles.cardContainer
      )}
    >
      <MasonryInfiniteGrid className="container" gap={20}>
        {list.map((item) => (
          <AnimalCard
            data-grid-groupkey={item.groupKey}
            key={item.id}
            name={item.nameList[0]}
            status={item.passport.status}
            description={item.mediaCard.desc}
            photoPath={item.mediaCard.photo[0]}
            color={item.color}
            vkLink={item.mediaCard.vkLink}
          ></AnimalCard>
        ))}
      </MasonryInfiniteGrid>
    </div>
  );
};

export default AnimalCardGrid;
