import React, { useEffect, useState } from 'react'
import {FiPlus,FiTrash,FiChevronDown,FiChevronUp} from 'react-icons/fi'
import {BiXCircle} from 'react-icons/bi'
import {useSelector,useDispatch} from 'react-redux'
import {addmember,deletemember} from '../features/reducer/teamSlice'
import {v4 as uuid} from 'uuid';
import dummyData from '../data.json'

const Team = () => {

    var employeeData = useSelector((state)=>state.team.value)
    const [name,setName] = useState('')
    const [company,setCompany] = useState('')
    const [status,setStatus] = useState('')
    const [notes,setNotes] = useState('')
    const [statusState,setStatusState] = useState(false)
    const [data,setData] = useState([])
    const [modalopen,setModelopen] = useState(false)
    const [filterOpen,setFilterOpen] = useState(false)
    const [filterCompany,setFilterComapany] = useState([])
    const [fcompany,setFCompany] = useState([])
    const [filterData,setFilterData] = useState([])

    useEffect(()=>{
        updateLocal([...employeeData])
        setData([...employeeData])
        setFilterComapany([...employeeData])
    },[employeeData])

    // useEffect(()=>{
    //     generateDummyData()
    // },[])

    useEffect(()=>{
        let aa = filterCompany.filter((ele)=> {
            return ele.isChecked === true
        }).map((e)=> e.company)
        setFCompany(aa)
        

    },[filterCompany])

    useEffect(()=>{
        let ss = [...employeeData].filter((ele)=>{
            return fcompany.includes(ele.company)
        })
        setFilterData(ss)
        
        
    },[fcompany,employeeData])

    useEffect(()=>{
        if(filterData.length === 0){
            setData([...employeeData])
        }else{

            setData(filterData)
        }
    },[filterData,employeeData])

    

    const dispatch = useDispatch()
    
    const today = new Date();

    function handleOpenmodal(){
        console.log("modal Opened")
        setModelopen(true)
    }
    function handleClosemodal(){
        console.log("Modal Closed")
        setModelopen(false)
    }
    function handleDelete(id){
        dispatch(deletemember(id))

    }
    function handleSave(){
        dispatch(addmember(payload))
        handleClosemodal()
    }
    function handleStatusState(){
        setStatusState(!statusState)
        
        console.log(data)
        statusState ? data.sort(sortByd):data.sort(sortByu)
        console.log(data,"---")
    }
    function generateDummyData(){
        alert("All of your data will be deleted, New dummy data will be genarate.")
        localStorage.setItem("teamdata",JSON.stringify(dummyData))
        window.location.reload();
        
    }

    function updateLocal(updated_data){
        localStorage.setItem("teamdata",JSON.stringify(updated_data))
    }

    function sortByd(a,b){
        if(a.status > b.status){
            return 1
        }else if(b.status > a.status){
            return -1
        }else{
            return 0
        }
    }

    function sortByu(a,b){
        if(a.status > b.status){
            return -1
        }else if(b.status > a.status){
            return 1
        }else{
            return 0
        }
    }

     function handleFilterCompany(e){
        const {name,checked} = e.target

        if(name === 'allselect'){
            let tempC = filterCompany.map((ele)=>{return {...ele, isChecked:checked}})
            setFilterComapany(tempC)
        }else{
        let tempC = filterCompany.map((ele)=> ele.company === name ? {...ele, isChecked:checked}:ele)
        setFilterComapany(tempC)
        }
        
    }
    console.log(fcompany);
    console.log(filterData);

    let payload = 
    {
        id:uuid(),
        name,
        company,
        status,
        notes,
        last_update:(today.getMonth()+1)+'/'+today.getDate() + '/'+ today.getFullYear()

    }
    
   
  return (
    <div className='team'>
        <div className="team__head">
            <div className='team__head__heading'>
            <h2>Team Members</h2>
            <button className='team__addmember' onClick={handleOpenmodal}>Add Team Member <FiPlus color='white'/> </button>
            </div>
            <button onClick={generateDummyData} title="Genarate Dummy data" className='dummyBtn'>Genarate</button>
            </div>
            {(employeeData.length === 0) ?  <div className='nodatafound'><p>No Data Found</p></div>:
            <div className="team__content">
                <div className="team__filter">
                    <div>
                        <button className='filter__btn' onClick={()=>{setFilterOpen(!filterOpen)}} >Company ({fcompany.length}) {filterOpen ? <FiChevronDown/> : <FiChevronUp/>}</button>
                        {filterOpen && <div className='team__multiCheckbox'>
                        <div className="team_formCheck team__allSelect_Checkbox">
                            <input type="checkbox" name="allselect" id="" onChange={handleFilterCompany}
                            checked={filterCompany.filter(ele => ele?.isChecked !==true).length < 1}
                            />
                            <label htmlFor=""> All Select</label>
                        </div>
                        {
                            filterCompany.map((ele,k)=>(
                                <div className="team_formCheck" key={k}>
                            <input type="checkbox" name={ele.company} id="" onChange={handleFilterCompany} checked={ele?.isChecked || false}/>
                            <label htmlFor=""> {ele.company}</label>
                        </div>
                            ))
                        }
                        </div>}
                    </div>
                        <button className='statusBtn' onClick={handleStatusState}>Status {statusState ? <FiChevronDown/> : <FiChevronUp/>}</button>
                    </div>
                    <div className="team__tableData">
                        
                        <table className='team_table'>
                            <thead>
                            <tr>
                                <th><input type="checkbox" name="" id="" /></th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Status</th>
                                <th>Last Updated</th>
                                <th>Notes</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((ele,k)=>(
                                <tr key={k}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{ele.name}</td>
                                <td>{ele.company}</td>
                                <td>{ele.status}</td>
                                <td>{ele.last_update}</td>
                                <td>{ele.notes}</td>
                                <td onClick={()=>handleDelete({id:ele.id})} className="deleteItem"><FiTrash/></td>
                            </tr>

                            ))}
                            </tbody>
                            
                        </table>
                        </div>
                </div>}
                {modalopen && 
                <div className="team__addmember__modal">
                    <span className='modal__close' onClick={handleClosemodal}><BiXCircle/></span>
                    <h3>Add Member</h3>
                    <div className="team__addmember__form">
                        <div className='form__fields'>
                        <label htmlFor="">Name</label> <br />
                        <input type="text" name="" id="" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Company</label> <br />
                        <input type="text" name="" id="" onChange={(e)=>{setCompany(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Status</label> <br />
                        <input type="text" name="" id="" onChange={(e)=>{setStatus(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Notes</label> <br />
                        <input type="text" name="" id="" onChange={(e)=>{setNotes(e.target.value)}}/>
                        </div>
                        </div>
                        <div className="addmember__footer">
                            <button onClick={handleClosemodal}>Cancel</button>
                            <button onClick={handleSave}>Save</button>
                            </div>
                    </div>
                }
        </div>
  )
}

export default Team