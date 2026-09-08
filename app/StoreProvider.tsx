"use client";

import { Provider } from "react-redux";
import { appStore } from "../utils/redux/appStore";

type StoreProviderProps = {
  children: React.ReactNode;
};

export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={appStore}>{children}</Provider>;
}
