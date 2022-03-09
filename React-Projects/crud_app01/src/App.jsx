import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'animate.css';
import {v4 as uuid} from 'uuid'

function App() {

  const [userData, setUserData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isUpdate,setIsUpdate] = useState(false)
  const [id,setId] = useState(0)

  var data = []

  // -------------JSON Server-----------
  
  // const getData = async () => {
  //   const response = await axios.get('http://localhost:3001/posts')
  //   setUserData(response.data)
  // }

 

  // const addUser = () => {
  //   axios.post('http://localhost:3001/posts', { "name": inputValue })
  //   setInputValue("")
  //   getData();
  // }
  

  // const editUser = async (id) => {
  //   setIsUpdate(true)
  //   setId(id)
  //   const updatedData = await axios.get(`http://localhost:3001/posts/${id}`)
  //   setInputValue(updatedData.data.name)
    
  // }

  // const UpdateUser = async () => {
    
  //   await axios.patch(`http://localhost:3001/posts/${id}`, { "name": inputValue })
  //   getData();
  //   setIsUpdate(false)
  // }

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:3001/posts/${id}`);
  //   getData();
  // }

  // const clearUserData = async () => {
  //   await userData.map((ele) => axios.delete(`http://localhost:3001/posts/${ele.id}`))
  //   getData();
  //   setInputValue("")
  // }




  // ---------------------LocalStorage---------------
   const getData = () => {
    const response = JSON.parse(localStorage.getItem("Test"))
    setUserData(response)
   }
  
  const addUser = () => {
    getData();
    data.push(...userData)
    data.push({ "id":uuid(),"name": inputValue })
    localStorage.setItem("Test",JSON.stringify(data))
    setInputValue("")
    getData();
  }

//  localStorage.setItem("Test",JSON.stringify([{"id":uuid(),"name":"Raja"}]))

  const editUser =  (id) => {
    setIsUpdate(true)
    setId(id)

    let updatedData = userData.filter(ele => ele.id === id)

    setInputValue(updatedData[0].name)
    
  }

  const UpdateUser = () => {

    let updatedData = userData.filter(ele => ele.id === id)
    let udata = userData.filter(ele => ele.id !== id)
    updatedData[0].name = inputValue
    data.push(...udata)
    console.log('userData: ', userData);
    data.push(...updatedData)
    console.log('updatedData: ', updatedData);
    localStorage.setItem("Test",JSON.stringify(data))
    console.log('userData: ', userData);
    //  axios.patch(`http://localhost:3001/posts/${id}`, { "name": inputValue })
    
    getData();
    setIsUpdate(false)
    setInputValue("")
  }
  
  const deleteUser = (id) => {
    let updatedData = userData.filter(ele => ele.id !== id)
    localStorage.setItem("Test",JSON.stringify(updatedData))
    getData();
  }
   const clearUserData = () => {
    localStorage.removeItem('Test')
    getData();
    setInputValue("")
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="Ap1p">
      <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      { isUpdate ? <button onClick={UpdateUser}>Update User</button> : <button onClick={addUser}>Add User</button>}
     <button onClick={clearUserData}>Clear All Data</button>
      {/* <div>
      {userData.length === 0 ? <h1>No Data Found</h1> : userData.map(ele => {
        return (
          <div className="element animate__animated animate__fadeInUp" key={ele.id}>
            <p >{ele.name}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            <button onClick={()=>{editUser(ele.id)}}>Edit</button>
            <button onClick={()=>{deleteUser(ele.id)}}>Delete</button>
            </div>
            </div>
        )
      })}
        </div> */}
      {userData.length < 1 ? <h1>No Data Found</h1>: userData.map(ele => (
        <div className="element animate__animated animate__fadeInUp" key={ele.id}>
        <p>{ele.name}</p>
        <button onClick={()=>{editUser(ele.id)}}>Edit</button>
            <button onClick={()=>{deleteUser(ele.id)}}>Delete</button>
            </div>
      ))}
    </div>
  );
}

export default App;
