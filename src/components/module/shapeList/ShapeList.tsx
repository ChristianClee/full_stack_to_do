import React from 'react';
import style from './ShapeList.module.css'
import ManagePart from '../../components/managePart/ManagePart';
import TaskPart from '../../components/taskPart/TaskPart';

const ShapeList: React.FC = () => {
  
  

  return (
    <div className={["container", style.wrapper].join(' ')}>
      <ManagePart />
      <TaskPart/>
    </div>
  );
}
export default ShapeList;