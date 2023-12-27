import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './TaskElement.module.css'
import SubmitBtn from '../../UI/buttons/SubmitBtn'
import ExistingInput from '../../UI/inputs/existinTask/ExistingInput';
import { id as idd } from '../../../constants/id';
//functions
import { useObsurveValue } from './castomHook';
import { CrudFunc } from './function'


const TaskElement: React.FC<{ text: string, id: number, theme: boolean }> = ({ text, id, theme }) => {
  const [value, setValue] = useState(text)
  const [accessBtn, setAccessBtn] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef(null)
  const valueTextRef = useRef<string>(text)

  useObsurveValue(setValue, valueTextRef,text )


  return (
    <div onClick={(e)=>console.log()} className={theme? [style.wrapper, style.additional].join(' ') : style.wrapper }>
      {
        accessBtn ?
          <SubmitBtn classStyle={'btn btn-primary'} text={'access'} func={() => CrudFunc.fetchRename(value,id,setAccessBtn)}/>
            :
          <SubmitBtn classStyle={"btn btn-outline-primary"} text={"rename"} func={() => CrudFunc.rename(inputRef,buttonRef,valueTextRef,setAccessBtn,setValue)} dataSet={idd.DATA_SET}  renameRef={buttonRef}/>
        }
      <ExistingInput inputRef={inputRef} value={value} func={CrudFunc.onchange} setValue={setValue}/>
      <SubmitBtn classStyle={"btn btn-outline-success"} text={"success"} func={() => CrudFunc.togglePost(id)} />
      <SubmitBtn classStyle={"btn btn-outline-danger"} text={"delete"} func={() => CrudFunc.deletePost(id)}/>

    </div>
  );
}
export default TaskElement;