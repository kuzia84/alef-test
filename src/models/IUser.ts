export interface IUser {
  name: string;
  age: number;
  children: IChildren[];
}

export interface IChildren {
  id: number;
  name: string;
  age: number;
}
