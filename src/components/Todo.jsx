/* eslint-disable no-unused-vars */
import React from 'react'



function Todo() {
  return ( <div className=' md:container md:mx-auto min-h-[80vh] w-full bg-slate-500 '>
      <div className=''>    
      <h1 className=' text-center text-3xl p-2'>iTask - Manage your todos at one place</h1>
      <div className=' flex flex-col items-center gap-2'>
        <h2>Add a Todo</h2>
        <div>
          <input type="text" placeholder='write something here' />
          <button>save</button>
        </div>
        <div> 
          <input type="checkbox" />
          <label >Show Finished</label>
        </div>
      </div>
      <h2>your Todos</h2>
      <div className=' flex gap-2'>
<div>
  Lorem ipsum dolor sit amet.
</div>
<div className=' flex gap-2'>
  <button>edit</button>
  <button>delete</button>
</div>
      </div>
      </div>
    </div>
  )
}

export default Todo