import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import { FormPage } from './FormPage';
import { Link } from 'react-router-dom'
import {ViewPage} from './ViewPage'


function App() {

  const [students, setStudents] = useState([])
  const [Details, setDetails] = useState({})
  const history = useHistory()

  
  

  const handleView = (id) => {
    axios.get(`http://localhost:8080/student/${id}`)
      .then(res => {
        setDetails(res.data.students)
        // console.log(res.data.students)
        history.push(`./details/${id}`)
      })
    .catch(err => console.error(err))
    
  }


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/student/${id}`)
      .then(res => console.log(res.data))
    .catch(err => console.error(err))
    
  }

   const handleEdit = (id) => {
    axios.patch(`http://localhost:8080/student/${id}`)
      .then(res => {
        setDetails(res.data)
        console.log(res.data)
        history.push('/form')
      })
    .catch(err => console.error(err))
    
   }
  
  useEffect(() => {
      axios.get('http://localhost:8080/student')
    .then((res) => {
      setStudents(res.data.students)
      // console.log(res.data.students)
    })
    .catch((err) => { console.log(err) })
  },[students])
  
 


  return (
<Switch>
      <Route path="/" exact>
          <div className="student">
      <div className="student__header">Student Manage System</div>
      <div className="student__container">
        <div className="student__data">
          <Link to="/form"><button className="student__createBtn" >Add New</button></Link>
          <table>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Action</th>
              <th>View Details</th>
            </tr>
        {students.map((ele) => (
          
            
            <tr>
              <td>{ ele.name}</td>
              <td>{ ele.age}</td>
              <td>{ ele.gender}</td>
            <td>{ele.city}</td>
            <td><button onClick={()=>handleEdit(ele._id)}>Edit</button><button onClick={()=>handleDelete(ele._id)}>Delete</button></td>
            <td><button onClick={()=>handleView(ele._id)}>View</button></td>
            </tr>
          
        ))}
        </table>
        </div>
        <div className="student__filter">
          <h1>filter</h1>
        </div>
      </div>
    </div>
      </Route>
      <Route path="/form">
        <FormPage data={ Details}/>
      </Route>
      <Route path="/details">
        <ViewPage data={ Details}/>
      </Route>
</Switch>

    
  );
}

export default App;
