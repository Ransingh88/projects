import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Jokes = () => {
    const [jokeData,setJokeData] = useState({});
    const [catagory,setCatagory] = useState([]);
    const [currentCatagory,setCurrentCatagory] = useState('Random')
    useEffect(()=>{
        handlegeneratejoke()
        getCatagory()
    },[])

    const handlegeneratejoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        // const response = await axios.get('https://api.chucknorris.io/jokes/random?category=career')
        console.log(response.data)
        setJokeData(response.data)

    }

    const getCatagory = async ()=>{
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        console.log(response.data);
        setCatagory(response.data)
    }
    
    const handleCatagoryJoke = async (catagory)=>{
        console.log(catagory);
        setCurrentCatagory(catagory)
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${catagory}`)
        console.log(response.data)
        setJokeData(response.data)
    }

  return (
    <div className='joke__container'>
        <div className="joke">
        <p>{jokeData.value}"Chuck Norris once pissed in the woods and it became the Petrified Forest."</p>
        <p className='catagoryFilter'>{currentCatagory}</p>
        </div>
        <button onClick={handlegeneratejoke} className="btn nextBtn">Next</button>
        <h3>Serach From Catagory</h3>
        <div className="catagory">
            {catagory.map((ele,k)=>(
                <button key={k} className='btn' onClick={()=>handleCatagoryJoke(ele)}>{ele}</button>
            ))}
        </div>
    </div>
    
  )
}

export default Jokes