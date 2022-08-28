import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, deleteToDo, removeToDo } from './actions/index';
import React from 'react';

function App() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoreducers.list)


  function setdata(event) {
    setInputData(event.target.value)
  }

  return (
    <div className="main-div">
      <div className='child-div'>

        <figure>


          <figcaption style={{ color: "plum",fontFamily:'Fredoka One'}}>Add your list here📝</figcaption>

        </figure>

        <div className='addItems'>
          <input type="text" placeholder='Add items 🔥...'
            value={inputData} onChange={setdata}></input>
          <i className="fa fa-plus add-btn" onClick={()=>{dispatch(addToDo(inputData),setInputData(''))}}/>
        </div>
        

        <div className='showItems'>
          {
            list.map((item) => {
              return (
                <div className='eachItem' key={item.id}>
                  <h3>{item.data}</h3>
                  <i className="far fa-trash-alt add-btn" title="delete item" onClick={() => dispatch(deleteToDo(item.id), setInputData(''))} />
                </div>
              )

            })
          }

        </div>
        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="remove All" onClick={() => dispatch(removeToDo())}>
            <span>Checklist</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
