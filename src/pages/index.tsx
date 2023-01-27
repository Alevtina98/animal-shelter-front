import { Inter } from "@next/font/google";
import { Carousel } from "react-bootstrap";
import Layout from "@/component/Layout/Layout";
import { memo } from "react";
import MainCarousel from "@/component/MainCarousel";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return <MainCarousel></MainCarousel>;
};
export default memo(Home);
