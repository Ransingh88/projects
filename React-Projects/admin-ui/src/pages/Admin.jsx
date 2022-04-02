import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiTrashAlt, BiEdit } from "react-icons/bi";

const Admin = () => {

    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(10)
    let pageNumbers = []

async function getData(){
    const url = `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    let response = await axios.get(url)
    setData(response.data)
}

function pagination(){
    let page = Math.ceil(data.length / 10)
    console.log('----',page)
}

for(let i=1;i<=Math.ceil(data.length / postPerPage);i++){
    pageNumbers.push(i)
}

console.log(pageNumbers)

useEffect(()=>{
    getData()
},[])

const indexofLastPage = page * postPerPage
const indexofFirstPage = indexofLastPage - postPerPage
const currentPosts = data.slice(indexofFirstPage,indexofLastPage)


  return (
    <div className='admin'>
        <div className="search">
            <input type="search" name="" id="" placeholder='Enter something to search'/>
        </div>
        <div className="content">
            <table className='dataTable'>
                <thead>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((item,key)=>(
                        <tr key={key}>
                            <td><input type="checkbox"/></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td><BiEdit color='gray'/> <BiTrashAlt color='red'/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="footer">
                {pageNumbers.map((pagen)=>(
                    <button className={(page === pagen) ? 'btn active' : 'btn'} key={pagen} onClick={()=>setPage(pagen)}>{pagen}</button>
                ))}
        </div>
    </div>
  )
}

export default Admin