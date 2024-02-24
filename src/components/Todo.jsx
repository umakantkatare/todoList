/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

useEffect(() => {
  let todoString = localStorage.getItem('todos')
if(todoString){
  let todos = JSON.parse(localStorage.getItem('todos'))
  setTodos(todos)
}
  
}, [])


const saveTodo = (params) => {
 localStorage.setItem('todos', JSON.stringify(todos))
}

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveTodo()
    console.log(todo);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveTodo()

   
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveTodo()
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };
  const handleCheckBox = (e) => {
    let id = e.target.id;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTodo()
  };
  return (
    <>
      <div className=" container bg-violet-200 mx-auto rounded-md my-5 p-5 min-h-[80vh] w-full ">
        <div>
          <h2 className="  font-bold text-xl">Add a Todo</h2>
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className=" w-1/2"
          />
          <button
            onClick={handleAdd}
            className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-7 text-sm text-white font-semibold py-1"
          >
            Add
          </button>
        </div>
        <input
          type="checkbox"
          checked={showFinished}
          onChange={toggleFinished}
        />
        <label htmlFor="show"> ShowFinished</label>
        <h2 className="  font-bold text-xl">your todos</h2>
        <div>
          <div className="todos">
            {todos.length === 0 && <div> No Todos to display </div>}
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div key={item.id}>
                    <div className="flex">
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={item.isCompleted}
                        onChange={handleCheckBox}
                      />
                      <div>{item.todo} </div>
                      <div className="button">
                        <button
                          onClick={(e) => handleEdit(e, item.id)}
                          className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-4 text-sm text-white font-semibold py-1"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(e, item.id)}
                          className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-3 text-sm text-white font-semibold py-1"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
