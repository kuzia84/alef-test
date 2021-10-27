import { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { InputGroup } from "../inputGroup/inputGroup";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";
import { appSlice } from "../../../store/reducers/AppSlice";
import { IChildren } from "../../../models/IUser";
import plus from "../../app/images/plus.svg";
import s from "./style.module.css";
import cn from "classnames";

interface UserFormProps {
  visible: boolean;
}

export const UserForm: FC<UserFormProps> = ({ visible }) => {
  const dispatch = useAppDispatch();
  const { setUserAge, setUserName, setUserChildren } = userSlice.actions;
  const { setUserFormVisible, setUserInfoVisible } = appSlice.actions;
  const { user } = useAppSelector((state) => state.userReducer);

  const [children, setChildren] = useState<IChildren[]>([
    { id: 0, name: "", age: 0 },
  ]);

  const setChildName = (value: string, childId: number) => {
    const newArr = children.map((item) => {
      if (item.id === childId) item.name = value;
      return item;
    });

    setChildren(newArr);
  };
  const setChildAge = (value: number, childId: number) => {
    const newArr = children.map((item) => {
      if (item.id === childId) item.age = value;
      return item;
    });

    setChildren(newArr);
  };
  const removeChild = (id: number) => {
    const newArr = children.filter((item) => item.id !== id);

    setChildren(newArr);
  };

  const storeUserName = (value: string) => {
    dispatch(setUserName(value));
  };
  const storeUserAge = (value: number) => {
    dispatch(setUserAge(value));
  };
  const storeChildren = () => {
    const newArr = children.filter(
      (item) => item.name.length > 2 && item.age > 0
    );
    // setChildren(newArr);
    if (user.age > 0 && user.age < 120 && user.name.length > 2) {
      dispatch(setUserChildren(newArr));
      dispatch(setUserFormVisible(false));
      dispatch(setUserInfoVisible(true));
    }
  };

  return (
    <form className={cn(s.userForm, { [s.visible]: visible })}>
      <div className={s.userForm__personal}>
        <div className={s.userForm__title}>
          <h3>Персональные данные</h3>
        </div>
        <InputGroup label="Имя" inputType="text" storeData={storeUserName} />
        <InputGroup
          label="Возраст"
          inputType="number"
          storeData={storeUserAge}
        />
      </div>
      <div className={s.userForm__childrens}>
        <div className={s.userForm__title}>
          <h3>Дети (макс. 5)</h3>
          {children.length < 5 && children.length > -1 && (
            <button
              className={s.userForm__addBtn}
              onClick={(e) => {
                e.preventDefault();
                setChildren((prvState) => [
                  ...prvState,
                  { id: Date.now(), name: "", age: 0 },
                ]);
              }}
            >
              <ReactSVG src={plus} className={s.addBtnIcon} />
              Добавить ребенка
            </button>
          )}
        </div>
        {children.map((item) => (
          <div className={s.userForm__row} key={item.id}>
            <div className={s.userForm__col}>
              <InputGroup
                label="Имя"
                inputType="text"
                storeData={setChildName}
                id={item.id}
              />
            </div>
            <div className={s.userForm__col}>
              <InputGroup
                label="Возраст"
                inputType="number"
                storeData={setChildAge}
                id={item.id}
              />
            </div>
            <button
              className={s.userForm__deleteBtn}
              onClick={() => removeChild(item.id)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <button
        className={s.userForm__submitBtn}
        onClick={(e) => {
          e.preventDefault();
          storeChildren();
        }}
      >
        Сохранить
      </button>
    </form>
  );
};
