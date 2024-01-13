import React, { useState } from 'react'
import Input_Field from './Input_Field'

const Add_Tasks = () => {
  const [user_tasks, setuser_tasks] = useState({})

  const data_Handle = (val, key) => {
    // console.log(val)
    // console.log(key)
    const obj = { ...user_tasks }
    obj[key] = val;
    setuser_tasks(obj)
    // val = ''
    
  }
  const onClickHandle = () =>{
 console.log( user_tasks)
    
  }
  return (
    <div>
      <div className='text-center p-3 bg-yellow-100'><h1 className='font-serif text-5xl'> Todo List <i class="fa-solid fa-check"></i></h1></div>
      <div className='flex justify-center p-8'>

        <Input_Field
          placeholder="Enter Your Task Title"
          type="text"
          id="title"
          onChangeHandle={data_Handle}
        />
        <Input_Field
          placeholder="Enter Your Task Desc."
          type="text"
          id="Description"
          onChangeHandle={data_Handle}
        />
        <button className='bg-stone-950 text-white px-5 p-1 rounded-md' onClick={onClickHandle} >Submit</button>
      </div>
    </div>
  )
}

export default Add_Tasks