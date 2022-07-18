import React, { useState } from 'react'
import axios from 'axios'
import './resource.css'

const Resources = () => {

    const [resourceData,setResourceData] = useState({name:"",link:"",description:"",catagory:"",image:""})
    const [showData,setShowData] = useState(false)

    const addResource = async (e)=>{
        
        await axios.post('http://localhost:3001/api/resource',resourceData)
        setResourceData({name:"",link:"",description:"",catagory:"",image:""})
        setShowData(false)
    }
    const handleInput = (e)=>{
        let name = e.target.name
        let value = e.target.value
        setResourceData({...resourceData, [name]:value})
    }
    const cancelResource = ()=>{
        setShowData(false)
    }
    
  return (
    <div className='resource'>
             
             


             <div className='resource__container'>
                 <div className="container__left"></div>
                 <div className="container__right">
                     <h2 className='form__heading'>Suggest a Resource you like!</h2>
                     <div className="form">
                     {showData ? <div className='resource_summary'>
                
                 <p>You are suggesting "<b>{resourceData.name}</b>" to be found in <b>{resourceData.link}</b> and it is under catagory of <b>{resourceData.catagory}</b>.</p>
                 <p>A small summary about {resourceData.name} : {resourceData.description}</p>
             </div> : 
                     <form className='resource__form'>
                         <div className='form__element'>
                <label htmlFor="">Name</label>
                 <input type="text" value={resourceData.name} onChange={handleInput} name='name'  placeholder='name'/> 
                 </div>
                 <div className='form__element'>
                 <label htmlFor="">Link</label>
                 <input type="link" value={resourceData.link} onChange={handleInput} name='link'  placeholder='link'/>
                 </div>
                 <div className='form__element'>
                 <label htmlFor="">Description</label>
                 <input type="text" value={resourceData.description} onChange={handleInput} name='description'  placeholder='description'/>
                 </div>
                 <div className='form__element'>
                 <label htmlFor="">Catagory</label>
                 {/* <input type="text" value={resourceData.catagory} onChange={handleInput} name='catagory'  placeholder='catagory'/> */}
                 <select name="catagory" id="catagory" onChange={handleInput}>
                     <option selected value="select">Select Catagory</option>
                     <option value="code_editor">code editor</option>
                     <option value="font">font</option>
                     <option value="stock_images">stock images</option>
                     <option value="mockAPI">mockAPI</option>
                     <option value="illustration">illustration</option>
                     <option value="inspiration">inspiration</option>
                     <option value="icon">icon</option>
                     <option value="color">color</option>
                     <option value="miscellaneous">miscellaneous</option>
                     <option value="stock_footages">stock footages</option>
                 </select>
                 </div>
                 <div className='form__element'>
                 <label htmlFor="">Image</label>
                 <input type="file" value={resourceData.image} onChange={handleInput} name='image'/>
                 </div>
                 <div className='form__element'>
                 <label htmlFor="">Image</label>
                 <input type="text" value={resourceData.image} onChange={handleInput} name='image'/>
                 </div>

             </form>}
             
                     </div>
                     <div className="actions">
                     {showData ? <div className='action__btns'>
             <button className='back' onClick={cancelResource}>Back</button><button className='next' onClick={addResource}>Submit</button></div> : <button className='next' onClick={()=>{setShowData(true)}}>Next</button>}
                     </div>
                 </div>
             </div>
    </div>
  )
}

export default Resources