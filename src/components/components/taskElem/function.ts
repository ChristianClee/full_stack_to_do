import axios from "axios";

export class CrudFunc {
  static getPath(addPath: string, id?: number): string {
    const domen = process.env.REACT_APP_API_URL;
    const rout = `/api/${addPath}`;
    const query = `?id=${id}`;

    const path: string = id ? domen + rout + query : domen + rout;
    return path;
  }
  static fetching(
    url: string,
    method: string,
    data?: { message: string; id: number }
  ) {
    console.log(data);
    axios({ url, method, data: { ...data } })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  static deletePost(id: number) {
    const addPath = "post";
    const url = this.getPath(addPath, id);
    this.fetching(url, "delete");
  }
  static togglePost(id: number) {
    const addPath = "postToggle";
    const url = this.getPath(addPath, id);
    this.fetching(url, "put");
  }
  static fetchRename(
    value: string,
    id: number,
    setAccessBtn: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const addPath = "post";
    const url = this.getPath(addPath);
    console.log(url);
    const body = {
      message: value,
      id: id,
    };
    this.fetching(url, "put", body);
    setAccessBtn(false);
  }
  static rename(
    inputRef: React.RefObject<HTMLInputElement>,
    buttonRef: React.MutableRefObject<null>,
    valueTextRef: React.MutableRefObject<string>,
    setAccessBtn: React.Dispatch<React.SetStateAction<boolean>>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) {
    const input = inputRef.current;
    const button = buttonRef.current;
    if (input) {
      input.focus();
      setAccessBtn(true);
    }
    document.addEventListener("click", (e) => {
      if (button) {
        const isMatch = e.target === button;
        if (!isMatch) {
          setAccessBtn(false);
          setValue(valueTextRef.current);
        }
      }
    });
  }
  static onchange(
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) {
    setValue(e.target.value);
  }
}
