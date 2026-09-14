"use client";
import { RootState } from "@/utils/redux/appStore";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import GPTSearch from "./GPTSearch";

const BrowseContainer = () => {
  const showGPT = useSelector((store: RootState) => store.gpt.showGPT);
  return <div>{showGPT ? <GPTSearch /> : <MainContainer />}</div>;
};

export default BrowseContainer;
