import axios from "axios";

export async function fetching() {
  const domen = process.env.REACT_APP_API_URL
  const query = "/api/postAll";
  const path: string = domen + query;
  const { data } = await axios.get(path)
  return data;
}

