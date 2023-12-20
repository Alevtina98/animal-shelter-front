import { Inter } from "@next/font/google";
import { Carousel } from "react-bootstrap";
import Layout from "@/component/Layout";
import { FC, memo } from "react";
import MainCarousel, { ICarouselItem } from "@/component/MainCarousel";

const inter = Inter({ subsets: ["latin"] });

const homeCarouselImgList: ICarouselItem[] = [
  { index: 0, name: "0" },
  { index: 1, name: "1" },
  { index: 2, name: "2" },
  { index: 3, name: "3" },
  { index: 4, name: "4" },
  { index: 5, name: "5" },
  { index: 6, name: "6" },
  { index: 7, name: "7" },
  { index: 8, name: "8" },
  { index: 9, name: "9" },
  { index: 10, name: "10" },
  { index: 11, name: "11" },
  { index: 12, name: "12" },
  { index: 13, name: "13" },
  { index: 14, name: "14" },
  { index: 15, name: "15" },
  { index: 16, name: "16" },
  { index: 17, name: "17" },
  { index: 18, name: "18" },
  { index: 19, name: "19" },
  { index: 20, name: "20" },
  { index: 21, name: "21" },
  { index: 22, name: "22" },
];
const Home: FC = () => {
  return (
    <div className="d-flex justify-content-between flex-column h-100 position-absolute">
      <MainCarousel catalog="/img/team" list={homeCarouselImgList} />
    </div>
  );
};
export default memo(Home);
