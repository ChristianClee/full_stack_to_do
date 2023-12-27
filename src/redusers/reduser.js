import React from "react";
export const ContextApp = React.createContext();



export const reqName = {
  INPUT_VALUE: 'inputValue',
  ADD_TASK: 'addTask',
  DELETE_TASK: 'deleteTask',
  TOGLE_TASK: 'successTask',
  RENAME_TASK: 'renameTask',
}



export const testReducer = (state, action) => {
  switch (action.type) {
    case reqName.ADD_TASK:
      const id = String(Date.now());
      let newOne;
      if (state.renameTask) {
        newOne = state.taskList.map((item) => {
          if (item.id === state.renameTask) {
            return { ...item, text: state.inputValue };
          } else return item;
        });
      } else {
        const newItem = { text: state.inputValue, id: id, success: false };
        newOne = [newItem, ...state.taskList];
      }
      return { ...state, taskList: newOne, inputValue: "", renameTask: null };

    case reqName.INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case reqName.DELETE_TASK:
      const deletOne = state.taskList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, taskList: deletOne };

    case reqName.TOGLE_TASK:
      const changeOne = state.taskList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, success: !item.success };
        } else return item;
      });
      return { ...state, taskList: changeOne };

    case reqName.RENAME_TASK:
      // console.log(action.payload)

      return { ...state, inputValue: "", renameTask: action.payload };

    default:
      return state;
  }
};