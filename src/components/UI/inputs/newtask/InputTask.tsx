import React from 'react';
import style from './InputTask.module.css'
import { ContextApp } from '../../../../redusers/reduser';
import { useContext } from 'react';
import { onchange } from './functios'


const InputTask: React.FC<{id:string}> = ({id}) => {
  const { state, dispatch } = useContext(ContextApp)
  

  return (
    <div className={style.wrapper}>
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input
        onChange={(e) => onchange(e, dispatch)}
        value={state.inputValue}
        type="text"
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
      />
    </div>
  );
}
export default InputTask;