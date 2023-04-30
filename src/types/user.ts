export interface IForm {
  userName: string;
  experience: string;
  country: string;
  addInfo: string[];
  hire: string;
  photo: FileList;
}

export interface IUser extends Omit<IForm, 'photo'> {
  id: number;
  photo: string;
}
