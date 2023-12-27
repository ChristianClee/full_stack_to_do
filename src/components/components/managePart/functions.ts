import axios from "axios";
import type { Iinitial } from '../../../redusers/initialState'

export function createPost(state: Iinitial) {
  const { inputValue } = state;
  const domen = process.env.REACT_APP_API_URL;
  const rout = "/api/post";
  const path: string = domen + rout;

  axios.post(path, {
    message: inputValue,
  });
}
