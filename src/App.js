import './App.css';
import { Button, Label, Input } from './components/';
import React from 'react'

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    if (document.querySelector("#addField").value != "") {
      let arr = [...todos];
      arr.push(value[0].toUpperCase() + value.slice(1));
      setTodos(arr)
      setValue("")
    }
  }
  const deleteTodo = ({ i }) => {
    let arr = [...todos];
    arr.splice(i, 1);
    setTodos(arr);
  }

 


  return (
    <div className="container-fluid">
      <div className="bg-dark row justify-content-center vw-100 vvh-100 align-items-center">
        <div className="col-md-8">
          <div className="card overflow-auto max-height py-2 px-4">
            <h4 className="card-title text-center fw-bold ">To Do App</h4>
            <div className="card-body">
              <ul className="no-bullets">
                <li>
                  <div className="d-flex justify-content-around">
                    <Input id="addField" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Would You like to write something? " />
                    <Button onClick={addTodo}>+</Button>
                    <span className="ms-1">
                      <Button>Delete All</Button>
                    </span>
                  </div>
                </li>
              </ul>
              <ul className="d-flex no-bullets flex-column-reverse mt-3">
                {todos.map((v, i) => {
                  return <li className="my-2" key={i}>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <Label>{v}</Label> */}
                      <Input id={i} value={v} />
                      <span className="targetBtn">
                        <Button onClick={() => deleteTodo(i)}>X</Button>
                      </span>
                    </div>
                  </li>
                })}
              </ul>
              <div className="text-light bg-light fixed-bottom fixed-card">aaa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
