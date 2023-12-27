import { useEffect } from "react";
import { fetching } from './functions';


export function useFetching(func:(arg:any) => void) {
  useEffect(() => {
    fetching()
      .then(response => {
        console.log(response);
        func(response)
      })
      .catch((e) => {
        func([]);
        console.log(e.message)
      })
  }, []);
}
