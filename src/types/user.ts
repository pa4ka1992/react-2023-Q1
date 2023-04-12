export interface IForm {
  userName: string;
  birthDate: string;
  country: string;
  addInfo: string[];
  gender: string;
  photo?: FileList;
}

export interface IUser extends IForm {
  id: number;
}
