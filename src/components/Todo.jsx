/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Todo() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
  setTodo(e.target.value)
  }
  const handleAdd = () => {
setTodos([...todos])
setTodo("")
console.log(todo)
  }
  return (
    <>
      <div className=" container bg-violet-200 mx-auto rounded-md my-5 p-5 min-h-[80vh] w-full ">
        <div>
          <h2 className="  font-bold text-xl">Add a Todo</h2>
          <input type="text" onChange={handleChange} value={todo} className=" w-1/2" />
          <button onClick={handleAdd} className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-7 text-sm text-white font-semibold py-1">Add</button>
        </div>
        <h2 className="  font-bold text-xl">your todos</h2>
        <div>
          <div className="todos">
            <div className="flex">
              <div className="">
                {todo}
               
              </div>
              <div className="button">
                <button className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-4 text-sm text-white font-semibold py-1">Edit</button>
                <button className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md mx-3 text-sm text-white font-semibold py-1">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
