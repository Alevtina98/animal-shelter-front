import { FC } from "react";
import clsx from "clsx";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

import AnimalCard from "@/pages/animals/components/bodyContent/card/AnimalCard";
import styles from "@/styles/AnimalHeader.module.css";

interface ICatCardsProps {
  list: any[];
}

export const AnimalsContent: FC<ICatCardsProps> = ({ list }) => {
  return (
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
  );
};

export default AnimalsContent;
