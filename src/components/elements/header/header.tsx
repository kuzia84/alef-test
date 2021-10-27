import { FC } from "react";
import { ReactSVG } from "react-svg";
import { useAppSelector } from "../../../hooks/redux";
import logo from "../../app/images/Logo_imi_horizontal.svg";
import cn from "classnames";
import s from "./style.module.css";

export const Header: FC = () => {
  const { userFormVisible, userInfoVisible } = useAppSelector(
    (state) => state.appReducer
  );
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <a href="/" className={s.header__logo}>
          <ReactSVG src={logo} />
        </a>
        <ul className={cn(s.header__menu, s.menu)}>
          <li className={s.menu__item}>
            <span className={cn(s.menu__link, { [s.active]: userFormVisible })}>
              Форма
            </span>
          </li>
          <li className={s.menu__item}>
            <span className={cn(s.menu__link, { [s.active]: userInfoVisible })}>
              Превью
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};
