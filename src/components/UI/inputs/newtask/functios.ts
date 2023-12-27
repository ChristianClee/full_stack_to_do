import { reqName } from "../../../../redusers/reduser";


export function onchange(e: React.ChangeEvent<HTMLInputElement>, dispatch: (arg: any)=>void) {
  dispatch({
    type: reqName.INPUT_VALUE,
    payload: e.target.value,
  });
}
