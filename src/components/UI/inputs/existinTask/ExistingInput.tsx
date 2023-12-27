import React from 'react';
import style from './ExistingInput.module.css'

type TaskProps = {
  inputRef: React.RefObject<HTMLInputElement>; 
  value: string;
  func: ( ...arg: any ) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const ExistingInput:React.FC<TaskProps> = ({inputRef, value, func, setValue}) => {
  return (
    <div className={style.text}>
      <input className={['form-control', style.input].join(' ')} ref={inputRef} value={value} onChange={(e)=> func(e, setValue )} />
      <div className={style.curtain}></div>
    </div>
  );
}
export default ExistingInput;