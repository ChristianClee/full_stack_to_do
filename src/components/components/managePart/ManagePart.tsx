import React, { useContext, useEffect } from 'react';
import style from './ManagePart.module.css';
import SubmitBtn from '../../UI/buttons/SubmitBtn';
import InputTask from '../../UI/inputs/newtask/InputTask';
import { ContextApp } from '../../../redusers/reduser';
import { id } from '../../../constants/id'
import { createPost } from './functions'


function ManagePart() {
  const {state} = useContext(ContextApp)



  return (
    <div>
      <h1 className='text-center'>To Do</h1>
      <form>
        <div className="mb-3">
          <InputTask id={id.INPUT_ID} />
        </div>
        {
          state.inputValue
          && 
          <SubmitBtn classStyle={"btn btn-primary"} text={"submit"} func={()=> createPost(state)}/>
        }
      </form>

    </div>
  );
}
export default ManagePart;