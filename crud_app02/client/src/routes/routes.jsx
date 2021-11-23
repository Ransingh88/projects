import React, { useEffect, useState } from "react";
import { Switch ,Route } from "react-router-dom";
import { Form } from '../components/Form'
import axios from 'axios'

const Routess = () => {

    const [userData,setUserData] = useState([]) 
    const [editData,setEditData] = useState(null) 

    const getAllData = async () => {
        
        const response = await axios.get("http://localhost:8080")
        // console.log(response.data.user);
        setUserData(response.data.user)
    }

    const createUser = async (name) => {
        await axios.post("http://localhost:8080", { name: name })
        getAllData()
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/${id}`)
        getAllData()
    }

    const editUser = async (id) => {
        const userData = await axios.get(`http://localhost:8080/${id}`)
        // console.log(userData.data.user)
        setEditData(userData.data.user)
    }

    useEffect(() => {
        getAllData()
    },[userData])

 
  return (
    <Switch>
      <Route exact path="/">
        <div className="content">
          <div className="content__form">
                      <Form createUser={createUser} editData={editData }/>
          </div>
                  <div className="content__datas">
                      {userData.length === 0 ? (<h1>No Data Found</h1>) : (userData.map((ele) => (
                          <div key={ele._id}>
                              <p >{ele.name}</p>
                              <button onClick={() => { editUser(ele._id) }}>Edit</button>
                              <button onClick={() => { deleteUser(ele._id) }}>Delete</button>
                          </div>
                      )))}
          </div>
        </div>
          </Route>
          <Route>
              <h1>404 Not Found</h1>
          </Route>
    </Switch>
  );
};

export  {Routess};
