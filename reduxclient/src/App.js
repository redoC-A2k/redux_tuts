import React from 'react'
import "./App.css"
import {useSelector, useDispatch } from 'react-redux' ;
import {incNumber,decNumber} from './redux/actions/index'; 

function App() {
  const mystore = useSelector ((store)=> store.changeTheNumber );
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Increment/Decrement counter</h1>
     <h4>Using React and Redux</h4>

     <div className='quantity'>
      <a className='quantity__minus' title="Decrement" onClick={()=>{ dispatch(decNumber()) }}><span> - </span></a>
      <input name='quantity' type='text' className='quantity__input' defaultValue={mystore}/>
      <a className='quantity__plus' title="Increment" onClick={()=>{ dispatch(incNumber()) }}><span> + </span></a>
     </div>

    </div>
  );
}

export default App;
