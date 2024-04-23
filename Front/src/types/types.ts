export interface IRole {
    _id: string;
    name: string;    
}
export interface ISelectInput {
    placeholder?: string;
    onChange: (category: string) => void;
    target:InputEvent;
}