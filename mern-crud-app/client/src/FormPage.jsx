import React, { useEffect, useState } from 'react'
import './App.css';

import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'

const FormPage = () => {

    const [studentDetails,setStudentDetails] = useState({})

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target
        setStudentDetails({
            name: form.name.value,
            age:form.age.value,
            gender:form.gender.value,
            city:form.city.value,
        })

        
    }

    

    console.log(studentDetails);
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
