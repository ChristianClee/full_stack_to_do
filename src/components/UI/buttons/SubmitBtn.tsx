import React,{useContext} from 'react';
import style from './SubmitBtn.module.css';
import { ContextApp, reqName } from '../../../redusers/reduser';


type BtnProp = {
  classStyle: string,
  text: string,
  func?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  dataSet?: string | undefined,
  renameRef?: React.MutableRefObject<null>
}

const SubmitBtn: React.FC<BtnProp> = ({classStyle, text, func, dataSet, renameRef}) => {
    // const {dispatch} = useContext(ContextApp)
  return (
    <button
      ref={renameRef}
      className={classStyle}
      data-set={ dataSet? dataSet: ""}
      onClick={(e) => {
        e.preventDefault()
        if (func) {
          func(e)
        }
      }}
    >
      {text}
    </button>
  );
}
export default SubmitBtn;