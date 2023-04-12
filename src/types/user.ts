export interface IForm {
  userName: string;
  birthDate: string;
  country: string;
  addInfo: string[];
  gender: string;
  photo: FileList;
}

export interface IUser extends Omit<IForm, 'photo'> {
  id: number;
  photo: string;
}
