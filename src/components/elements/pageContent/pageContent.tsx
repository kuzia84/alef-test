import { FC } from "react";
import s from "./style.module.css";

export const PageContent: FC = (props) => {
  return <div className={s.pageContent}>{props.children}</div>;
};
