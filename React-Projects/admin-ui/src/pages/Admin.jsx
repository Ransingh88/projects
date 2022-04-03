import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiTrashAlt, BiEdit,BiCheck } from "react-icons/bi";
import {useDispatch,useSelector} from 'react-redux'
import {addData,searchFilter,deleteFilter,deleteSelectedItem,updateData} from '../features/admin/employeeSlice'
import {BiChevronLeft,BiChevronsLeft,BiChevronRight,BiChevronsRight} from 'react-icons/bi'

const Admin = () => {

    // const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [postPerPage] = useState(10)
    const [searchData,setSearchData] = useState('')
    const [isEdit,setIsEdit] = useState(null)
    let pageNumbers = []
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [role,setRole] = useState('')
    const [isSelected,setIsSelected] = useState(null)

    const url = `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    const dispatch = useDispatch()
    const empData = useSelector((state)=>state.employee.employees)

    const indexofLastPage = page * postPerPage
    const indexofFirstPage = indexofLastPage - postPerPage
    const currentPosts = empData.slice(indexofFirstPage,indexofLastPage)


    async function getData(){
    let response = await axios.get(url)
    dispatch(addData(response.data))
    }

    async function search(){
    let response = await axios.get(url)
    let data = response.data
    setPage(1)
    dispatch(searchFilter({searchData,data}))
    }

function deleteData(id){
    dispatch(deleteFilter(id))
}

function EditData(id,ele){

    if(isEdit === id){
        dispatch(updateData({id,name,email,role}))
        setIsEdit(null)
    }else{
        setName(ele.name)
setEmail(ele.email)
setRole(ele.role)
        setIsEdit(id)
    }

}
let selectedEmployees = []
function checkBoxSelect(e){
    if(e.target.checked === true){
        selectedEmployees.push(e.target.id)
    }else{
        selectedEmployees = selectedEmployees.filter((item)=>{
            return item !== e.target.id
        })
    }
    // setIsSelected(e.target.id)
    console.log(selectedEmployees)
}


function deleteSeleted(){
    dispatch(deleteSelectedItem(selectedEmployees))
    selectedEmployees = []
}

function handlePage(p){
    setPage(p)
}

for(let i=1;i<=Math.ceil(empData.length / postPerPage);i++){
    pageNumbers.push(i)
}

useEffect(()=>{
    getData()
},[])

useEffect(()=>{
    search()
    
},[searchData])
function prevPagination(){
    if(page <= 1){
        setPage(1)
    }else{

        setPage(page-1)
    }
}
function nextPagination(){
    if(page >= pageNumbers.length){
        setPage(pageNumbers.length)
    }else{

        setPage(page+1)
    }
}
function jumpfirstPagination(e){
    setPage(1)
}
function jumplastPagination(){
    setPage(pageNumbers.length)
}

  return (
    <div className='admin'>
        <div className="search">
            <input type="search" name="" id="" placeholder='Search by name, email or role' value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}/>
           
        </div>
        <div className="content">
            <table className='dataTable'>
                <thead>
                    <tr>
                        <td><input type="checkbox"  name='selectAll'/></td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((item,key)=>(
                       
                        isEdit === item.id ?
                        
                            <tr key={key}>
                            <td><input  id={item.id} name={item.name} type="checkbox" onClick={checkBoxSelect}/></td>
                            <td><input type='text'  value={name}  onChange={(e)=>setName(e.target.value)}/></td>
                            <td><input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/> </td>
                            <td><input type='text' value={role} onChange={(e)=>setRole(e.target.value)}/></td>
                            <td><span onClick={()=>EditData(item.id)}>{<BiCheck color='green'/>} </span> <span onClick={()=>deleteData(item.id)}><BiTrashAlt color='red'/></span></td>
                        </tr> :
                        <tr key={key}>
                            
                            <td><input id={item.id} name={item.name} type="checkbox" onClick={checkBoxSelect}/></td>
                            <td>{item.name}</td>
                            <td>{item.email} </td>
                            <td>{item.role}</td>
                            <td><span onClick={()=>EditData(item.id,item)}>{<BiEdit color='gray'/>} </span> <span onClick={()=>deleteData(item.id)}><BiTrashAlt color='red'/></span></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
        <div className="footer">

                    <button className='selectedDeleteBtn' onClick={deleteSeleted}>Delete Selected</button>
                    <div className='pagination'>
                    <button name="jumpfirst" onClick={jumpfirstPagination} className='btn'><BiChevronsLeft/></button>
                    <button name="prev" onClick={prevPagination} className='btn'><BiChevronLeft/></button>
                {pageNumbers.map((pagen)=>(
                    <button className={(page === pagen) ? 'btn active' : 'btn'} key={pagen} onClick={()=>handlePage(pagen)}>{pagen}</button>
                ))}
                 <button name="next" onClick={nextPagination} className='btn'><BiChevronRight/></button> 
                 <button name="jumplast"  onClick={jumplastPagination} className='btn jumplast'><BiChevronsRight/></button>
                 </div>
        </div>
    </div>
  )
}

export default Admin