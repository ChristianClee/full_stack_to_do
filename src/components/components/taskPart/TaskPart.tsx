import React,{ useEffect, useState } from 'react';
import style from './TaskPart.module.css';
import TaskElement from '../taskElem/TaskElement';
import { ContextApp } from '../../../redusers/reduser';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './transitionStyle.css';
//functions
import { useFetching } from './customHook'
// types
import type { PropTask } from './types'


function TaskPart() {
  const [taskList, setaTaskList] = useState<PropTask[]>([])
  useFetching(setaTaskList)
  
 async function subscribe() {
    const eventSource = new EventSource('http://localhost:5000/connect')
    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setaTaskList(message)
      console.log('newRender')
      }
  }
  useEffect(() => {
    subscribe()
  },[])




  return (
    <div className={['mt-1 mb-1', style.wrapper].join(' ')}>
      <TransitionGroup>
        {
          taskList.map((task) => 
            <CSSTransition
              key={task.id}
              timeout={700}
              // in={true}
              appear={false}
              // mountOnEnter={false}
              classNames='TaskElement_Transition'
            >
              <TaskElement text={task.message_text} id={task.id} key={task.id} theme={task.success} />
            </CSSTransition>
            
          )
        }
      </TransitionGroup>
      
    </div>
  );
}
export default TaskPart;


