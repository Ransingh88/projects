import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router'
import { FormPage } from './FormPage';
import {Link} from 'react-router-dom'


function App() {

  const [students, setStudents] = useState([])

 const createStudent = () => {
   console.log('student created')
  }
  
  useEffect(() => {
      axios.get('http://localhost:8080/student')
    .then((res) => {
      setStudents(res.data.students)
      console.log(res.data.students)
    })
    .catch((err) => { console.log(err) })
  }, [])
  
 


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
            <td><button>Edit</button><button>Delete</button></td>
            <td><button>View</button></td>
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
        <FormPage/>
      </Route>
</Switch>

    
  );
}

export default App;
