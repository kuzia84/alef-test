import { FC } from "react";
import s from "./style.module.css";

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__copyright}>all rights reserved</div>
    </footer>
  );
};
