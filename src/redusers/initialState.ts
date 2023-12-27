export interface Iinitial {
  inputValue: string;
  taskList: {
    text: string;
    id: number;
    success: boolean;
  }[];
  renameTask: null | string;
}

export const initialState: Iinitial = {
  inputValue: "",
  taskList: [],
  renameTask: null,
};
