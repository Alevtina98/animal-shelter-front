import { FC, useEffect, useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

import AnimalCard from "@/pages/animals/components/bodyContent/card/AnimalCard";

import animalFile from "../../../../../public/animal/animal.json";
import animalPhotoFile from "../../../../../public/animal/photo.json";
import animalShortTextFile from "../../../../../public/animal/shortText.json";

import genderFile from "../../../../../public/animalList/gender.json";
import genusFile from "../../../../../public/animalList/genus.json";
import statusFile from "../../../../../public/animalList/status.json";
import colorFile from "../../../../../public/animalList/color.json";

export type GenderType = "м" | "ж";
export type GenusType = "кошка" | "собака";
export type StatusType = "ищет дом" | "дома";
export type CatColorType =
  | "степной"
  | "лесной"
  | "калико"
  | "черепаховый"
  | "красный";
export type ColorType = CatColorType;

export type FilterValueType = GenderType | GenusType | StatusType | ColorType;

export type FilterKeyType = "gender" | "genus" | "status" | "color";
export type AnimalKeyType = string;

export type UserFilterType = Record<FilterKeyType, FilterValueType>;

export interface IFilterData {
  value: FilterValueType;
  animalIdList: AnimalKeyType[];
}
export type FilterDataFileType = Record<
  FilterKeyType,
  IFilterData[] | null | undefined
>;

export interface IFileFilters {
  gender?: IFilterData[];
  genus?: IFilterData[];
  status?: IFilterData[];
  color?: IFilterData[];
}
export interface IFilterKey {
  gender?: GenderType;
  genus?: GenusType;
  status?: StatusType;
  color?: ColorType;
}
export interface ICardAnimal extends IFilterKey {
  name: string;
  photo?: string[];
  shortText?: string;
}
export type CardAnimalType = Record<AnimalKeyType, ICardAnimal | null>;

const getAnimalFilterValue = (
  animalKey: AnimalKeyType,
  filterList: IFilterData[] | null | undefined
): FilterValueType | undefined => {
  if (!filterList) return undefined;
  return filterList.find((item) => item.animalIdList.indexOf(animalKey) != -1)
    ?.value;
};

interface ICatCardsProps {
  list: any[];
  filters: UserFilterType;
}
export const AnimalsContent: FC<ICatCardsProps> = ({ list, filters }) => {
  const [animalRecord, setAnimalRecord] = useState<CardAnimalType | null>(null);

  const loadAnimalsData = async () => {
    if (!animalFile) return;
    const cardAnimalRecord: CardAnimalType = Object.fromEntries(
      animalFile.animals.map((item) => [item.id, { name: item.name }])
    );
    const photoList = animalPhotoFile.photo;
    const shortTextList = animalShortTextFile.shortText;
    for (const { animalId, photo } of photoList) {
      const animalCard = cardAnimalRecord[animalId];
      if (!animalCard) continue;
      animalCard.photo = photo;
    }
    for (const { animalId, shortText } of shortTextList) {
      const animalCard = cardAnimalRecord[animalId];
      if (!animalCard) continue;
      animalCard.shortText = shortText;
    }
    const fileFilters: IFileFilters = {
      gender: genderFile?.gender as IFilterData[],
      status: statusFile?.status as IFilterData[],
      genus: genusFile?.genus as IFilterData[],
      color: colorFile?.color as IFilterData[],
    };
    Object.entries(fileFilters).forEach(([key, data]) => {
      const filterDataList = data as IFilterData[];
      for (const { value, animalIdList } of filterDataList) {
        animalIdList.forEach((animalId) => {
          const animalCard: ICardAnimal | null =
            cardAnimalRecord[animalId as AnimalKeyType];
          const animalCardItemKey = key as FilterKeyType;
          if (!animalCard || !animalCard[animalCardItemKey] || !value) return;
          (animalCard[animalCardItemKey] as FilterValueType) = value;
        });
      }
    });
    setAnimalRecord(cardAnimalRecord);
  };

  useEffect(() => {
    loadAnimalsData().then((r) => {});
  }, []);

  useEffect(() => {
    if (!animalRecord) return;
    let cardAnimalRecord: CardAnimalType = { ...animalRecord };
    Object.entries(animalRecord).forEach(([animalKey, animalData]) => {
      if (!animalData) return;
      let isTarget = true;
      for (const [filterKey, filterValue] of Object.entries(filters)) {
        if (animalData[filterKey as FilterKeyType] === filterValue) continue;
        isTarget = false;
      }
      if (isTarget) return;
      cardAnimalRecord[animalKey] = null;
    });
    setAnimalRecord(cardAnimalRecord);
  }, [filters]);

  if (!animalRecord) return null;
  return (
    <MasonryInfiniteGrid className="container" gap={20}>
      {Object.entries(animalRecord).map(([key, value]) =>
        value ? (
          <AnimalCard
            key={key}
            data-grid-groupkey="hz"
            animalKey={key}
            name={value.name}
            description={value.shortText}
            photoPath={value.photo?.[0]}
            color={value.color}
            /* vkLink={item.mediaCard.vkLink}*/
            status={value.status}
          ></AnimalCard>
        ) : null
      )}
    </MasonryInfiniteGrid>
  );
};

export default AnimalsContent;
