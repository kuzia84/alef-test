import { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import s from "./style.module.css";
import cn from "classnames";

interface UserInformationProps {
  visible: boolean;
}

export const UserInformation: FC<UserInformationProps> = ({ visible }) => {
  const { user } = useAppSelector((state) => state.userReducer);

  const ageLegend = (age: number) => {
    const str = age.toString().trim().slice(-2);
    const lastDigit = str.charAt(str.length - 1);
    const penultDigit = str.charAt(str.length - 2);
    if (+penultDigit === 1) return "лет";
    if (+lastDigit === 1) return "год";
    if (+lastDigit > 1 && +lastDigit < 5) return "года";
    if (+lastDigit === 0 || (+lastDigit > 4 && +lastDigit <= 9)) return "лет";
  };

  return (
    <div className={cn(s.userInformation, { [s.visible]: visible })}>
      <div className={s.userInformation__personal}>
        <div className={s.userInformation__title}>
          <h3>Персональные данные</h3>
        </div>
        <div className={s.userInformation__user}>
          {user.name}, {user.age} {ageLegend(user.age)}
        </div>
      </div>
      {user.children.length <= 0 && (
        <div className={s.userInformation__children}>
          <div className={s.userInformation__title}>
            <h3>Детей нет</h3>
          </div>
        </div>
      )}
      {user.children.length > 0 && (
        <div className={s.userInformation__children}>
          <div className={s.userInformation__title}>
            <h3>Дети</h3>
          </div>
          <ul className={s.userInformation__list}>
            {user.children.map((item) => (
              <li key={item.id}>
                <span className={s.userInformation__child}>
                  {item.name}, {item.age} {ageLegend(item.age)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
