import axios from 'axios'
import { useEffect, useState } from 'react'
import Styled from "styled-components"
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from "react-redux"
import { getData } from '../redux/actions'
import { Link } from "react-router-dom"
import { PostUser } from './postUser'

export const Home = ({ id }) => {
    const state = useSelector(state => state.users.data)

    const [page, setPage] = useState(null)
    const [age, setAge] = useState("all")
    const [gender, setGender] = useState("all")
    const [city, setCity] = useState("all")
    const [sort, setSort] = useState("asce")
    const dispatch = useDispatch()




    const history = useHistory()



    
    const findData = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const p = queryParams.get('page');
        const a = queryParams.get('age');
        const g = queryParams.get('gender');
        const c = queryParams.get('city');
        const s = queryParams.get('sort');
        let st
        if (p == null && page == null) {
            setPage(1)
            st = `page=${1}`;
        }

        else if (p && page == null) {
            setPage(p)
            st = `page=${p}`;
        }
        else {

            st = `page=${page}`;
        }


        if (age) {
            if (a !== "all") {
                setAge(Number(a))
                st += `&age=${Number(a)}`;

            }
            else {

                st += `&age=${age}`;
            }
        }
        if (gender) {
            if (g !== "all") {
                setGender(g)
                st += `&gender=${g}`;
            }
            else {

                st += `&gender=${gender}`;
            }
        }
        if (city) {
            if (c !== "all") {
                setCity(c)
                st += `&city=${c}`

            }
            else {

                st += `&city=${city}`
            }
        }
        if (sort) {
            if (s !== "asce") {
                setSort(s)
                st += `&sort=${s}`

            }
            else {

                st += `&sort=${sort}`
            }
        }
        history.push({
            pathname: '/',
            search: `${st}`
        })



    }


    const handlePage = (p) => {

        setPage(Number(page) + p)
        // console.log(page)
        findData()


    }
    const handleDelete = (id) => {

        axios.delete(`http://localhost:2345/users/${id}`).then((res) => {
            if (res.data) {
                alert("Deleted succesfully")
            }
            dispatch(getData({ page, age, gender, city, sort }));
        })
        window.location.reload();
    }
    const handlePost = (payload) => {
        axios.post(`http://localhost:2345/users/`, payload).then((res) => {
            if (res.data) {
                alert("data posted succefully")
            }
            else {
                alert("something went wrong")
            }
        })
        dispatch(getData({ page, age, gender, city }));
window.location.reload();
    }

    useEffect(() => {
        dispatch(getData({ page, age, gender, city, sort }));
        findData()
        // console.log(page, age, city, gender,)

    }, []);

    // dispatch, page, age, gender, city, sort

console.log(state)
    return <HomeWrapper>

        <div>
            <UserWrapper>
                    <table id="customers">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>City</th>
    <th>Action</th>
  </tr>
  
  
                    

                    {
                        state && state.map((el) => {
                            return <tr key={el._id}>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                                <td>{el.gender}</td>
                                <td>{el.city}</td>
                                <td>
                                <Link to={`/${el._id}`}>
                                    <button >Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(el._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
</table>


                
            </UserWrapper>


            <PageWrapper>
                {page === 0 ?
                    <button disabled>
                        prev
                    </button> :

                    <button onClick={() => handlePage(-1)}>prev</button>
                }
                <button onClick={() => handlePage(+1)}>next</button>
            </PageWrapper>
        </div>

        <SortingWrapper>


            <FilterWrapper>
                <h5>Filters</h5>
                <div>
                    <div>

                        <label >gender :  </label>
                        <select name="gender" onChange={(e) => setGender(e.target.value)} >
                            <option value="all">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>

                        <label >age :  </label>
                        <select name="age" onChange={(e) => setAge(e.target.value)} >
                            <option value="all">select age</option>
                            <option value="10">greater than 10</option>
                            <option value="20">greater than 20</option>
                            <option value="30">greater than 30</option>
                            <option value="40">greater than 40</option>
                            <option value="50">greater than 50</option>
                            <option value="60">greater than 60</option>
                            <option value="70">greater than 70</option>
                            <option value="80">greater than 80</option>
                        </select>
                    </div>
                    <div>

                        <label >city :  </label>
                        <select name="city" onChange={(e) => setCity(e.target.value)} value={city}>
                            <option value="all">select city</option>
                            <option value="BBSR">BBSR</option>
                            <option value="Kalahandi">Kalahandi</option>
                            <option value="Angul">Angul</option>
                            <option value="Banpur">Banpur</option>
                            <option value="Khordha">Khordha</option>

                        </select>
                    </div>
                </div>

            </FilterWrapper>
            <FilterWrapper>
                <h5>Sort</h5>
                <select name="asce" onChange={(e) => setSort(e.target.value)} value={sort}>
                    <option value="asce">ascending</option>
                    <option value="desc">descending</option>

                </select>
            </FilterWrapper>

            <FilterWrapper>
                <h5>Post User</h5>
                <PostUser handlePost={handlePost} />

            </FilterWrapper>
        </SortingWrapper>
    </HomeWrapper >


}


const HomeWrapper = Styled.div`

display:flex;
justify-content:space-between;
padding:10px;
margin:2rem;
`
const UserWrapper = Styled.div`
padding:2rem;
width: 100%;
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #537bf1;
  color: white;
}
`
const PageWrapper = Styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:10px;
& > button{
    border:none;
    outline:none;
   padding:0.6rem 1.2rem;
   cursor:pointer;
   border-radius:5px;
`
const FilterWrapper = Styled.div`
background-color:whitesmoke;
max-height:250px;
border-radius:5px;
padding:10px;
 & > div{
     display:flex;
     flex-direction:column;
     gap:10px;
     justify-content:center;
 }
`

const SortingWrapper = Styled.div`

position:sticky;
top:0px;
&>div{
    margin:10px;
}
`