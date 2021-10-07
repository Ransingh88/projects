import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

import { Link, useHistory } from 'react-router-dom'
import {Redirect} from 'react-router'

const FormPage = ({data}) => {
    const history = useHistory()

    const [studentDetails, setStudentDetails] = useState({
        name:"",age:"",gender:"",city:""
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target
        // setStudentDetails({
        //     name: form.name.value,
        //     age:form.age.value,
        //     gender:form.gender.value,
        //     city:form.city.value,
        // })
     
        
          
        axios.post('http://localhost:8080/student', {
             name: form.name.value,
            age:form.age.value,
            gender:form.gender.value,
            city:form.city.value,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        alert('User Added Successfully')

        form.name.value = null
        form.age.value = null
        form.gender.value = null
        form.city.value = null

        history.push('/')
    }

    

    

    // console.log(studentDetails);
    return (
        <div className="formPage">
            <div className="student__header">Student Manage System</div>
           <Link to="/"> <p>Back to Home</p> </Link>
            <div className="formPage__container">
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name"/> <br />

                    <label htmlFor="age">Age</label><br />
                    <input type="text" name="age"/> <br />

                    <label htmlFor="gender">gender</label><br />
                    <input type="text" name="gender"/> <br />

                    <label htmlFor="city">City</label><br />
                    <input type="text" name="city"/> <br />

                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export  {FormPage}
