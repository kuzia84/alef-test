import { FC, useState } from "react";
import s from "./style.module.css";
import cn from "classnames";

interface InputGroupProps {
  label: string;
  inputType: "text" | "number";
  storeData?: (arg0: any, arg1?: any) => void;
  id?: number;
}

export const InputGroup: FC<InputGroupProps> = ({
  label,
  inputType = "text",
  storeData,
  id = 0,
}) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState<boolean>();

  const validateName = (name: string) => {
    if (name === "") return false;
    let words = name.trim().split(" ");
    if (words.length < 1) return false;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === "") return false;
      if (i < 2 && !/[A-Z-А-Я-]/.test(words[i][0])) return false;
      if (i >= 1 && !/[a-zA-Zа-яА-Я]/.test(words[i][0])) return false;
      if (/[^a-z-а-я-]/.test(words[i].slice(1))) return false;
    }
    return true;
  };

  return (
    <div className={cn(s.inpurGroup, { [s.notValid]: valid === false })}>
      <label className={s.inpurGroup__label}>{label}</label>
      <input
        className={s.inpurGroup__input}
        type={inputType}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          if (inputType === "text") setValid(validateName(value));
          if (inputType === "number") {
            setValid(+value > 0 && +value < 120 ? true : false);
          }
          if (storeData && value && id !== undefined) {
            storeData(value, id);
          }
          if (storeData && value && id === undefined) {
            storeData(value);
          }
        }}
        required
      />
    </div>
  );
};
