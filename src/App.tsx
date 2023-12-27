import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ShapeList from './components/module/shapeList/ShapeList';
import { ContextApp, testReducer } from './redusers/reduser';
import { initialState } from './redusers/initialState';





function App() {
  const [state, dispatch] = useReducer( testReducer, initialState )
  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <div className="App">
        <ShapeList/>
      </div>
    </ContextApp.Provider>
    
  );
}

export default App;
