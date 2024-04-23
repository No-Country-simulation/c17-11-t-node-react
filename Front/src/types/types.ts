export interface IRole {
  _id: string;
  name: string;
}
export interface ISelectInput {
  placeholder?: string;
  onChange: (category: string) => void;
  target: InputEvent;
}

export interface UserProfile {
  id: number;
  name: string;
  description: string;
  address: string;
  imageUrl: string;
}
