import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
const [name,setName] = useState('');
const [age,setAge] = useState('')
const [datas,setDatas] = useState([])
const [uid,setUid] = useState('')
const [updateStatus,setUpdateStatus] = useState(false)

var handleSubmit = async ()=>{
  
  let payload = {
    name,
    age
  }
  await axios.post('http://localhost:3001/api/add',payload)
  setName('')
  setAge('')
  getdata()
  
}

let getdata = async ()=>{
  let d = await axios.get('http://localhost:3001/api/find')
  setDatas(d.data.res)
}

useEffect(()=>{
  getdata()
},[])

let handleDelete = async (id)=>{
    await axios.delete(`http://localhost:3001/api/delete/${id}`)
    console.log(`User id ${id} Deleted Successfully`)
    getdata()
}
let handleEdit = async (id,e)=>{
  setUid(id)
  let dd = await axios.get(`http://localhost:3001/api/find/${id}`)
  setName(dd.data.res.name)
  setAge(dd.data.res.age)
  setUpdateStatus(true)
  console.log(e)
  console.log(uid)
}
let handleUpdate = async ()=>{
  let payload = {
    name,
    age
  }
  console.log(uid)
  await axios.patch(`http://localhost:3001/api/update/${uid}`,payload)
  getdata()
  setUpdateStatus(false)
}

console.log(datas)

  return (
    <div className="App">
      <h1>CRUD APP</h1>

      <div className='form'>
        <input type="text" placeholder='enter your name' value ={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="number" placeholder='enter your age' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
       
        {updateStatus ? <button onClick={handleUpdate}>update</button> : <button onClick={handleSubmit}>submit</button>}
      </div>

    <div className='dataContainer'>
        {datas.length == 0 ? <div className='nodata'>No data Found</div>:datas.map((element,key) =>(
          <div key={key} className="datas">
          <p className='data'>Your name is {element.name} <span> and you are {element.age} years old.</span></p>
          <div className='buttons'>
          <button onClick={(e)=>{handleEdit(element._id,e)}}>Edit</button>
          <button onClick={(e)=>{handleDelete(element._id)}}>Delete</button>
          </div>
          </div>
        ))}
    </div>
      
    </div>
  );
}

export default App;
