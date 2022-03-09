import axios from 'axios';
import React, { useEffect, useState , useRef} from 'react'

const Form = ({ createUser, editData }) => {
    
    const [name, setName] = useState("")
    const [isEdit, setIsEdit] = useState(true)
    
    

    const handleOnChange = (e) => {
        e.preventDefault();
        setName(e.target.value)

    }

    const handleAdd = () => {
        
        createUser(name)
        setName("")
    }

    const handleupdate = () => {
        axios.patch(`http://localhost:8080/${editData._id}`, { name: name })
        setIsEdit(true)
        setName("")
    }

    useEffect(() => {
      

    if (editData == null) {
           setName("") 
    } else {
        setName(editData.name)
        setIsEdit(false)
        }
            
    },[editData])

    return (
        <div>
            Name
            <input type="text" onChange={handleOnChange} value={name} />
            
            {isEdit ? <button onClick={handleAdd}>Add User</button> : <button onClick={handleupdate}>Update</button>}
            
            
        </div>
    )
}

export  {Form}
