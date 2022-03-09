import React, { useState } from 'react'
import data from './data'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text } = data[index]
    

    const checkNum = (num) => {
        if (num > data.length - 1) {
            return 0
        }
        if (num < 0) {
            return data.length - 1
        }
        return num
    }

    const prevReview = () => {

       
         setIndex((index) => {
           let newIndex = index - 1
           return checkNum(newIndex)
            }
           
        )
    }

    const nextReview = () => {
        
       setIndex((index) => {
           let newIndex = index + 1
           return checkNum(newIndex)
            }
           
        )
    }

    const random = () => {
        let newIndx = Math.floor(Math.random() * data.length)
        console.log('newIndx: ', newIndx);
        if (index === newIndx) {
            newIndx+=1
        }
        setIndex(newIndx)
    }
    
    return (
        <div className="review">
            <div className="crop">
            <img src={image} alt={text} />
            </div>
            <h3 className="review__name">{ name}</h3>
            <p className="review__job">{ job}</p>
            <p className="review__text">{ text}</p>
            <div className="review__btn">
                <button onClick={prevReview}>

                <MdKeyboardArrowLeft/>
                </button>
                <button onClick={nextReview}>

                <MdKeyboardArrowRight/>
                </button>
            </div>
            <button className="review__surbrise-btn" onClick={random}>Surprise</button>
        </div>
    )
}

export  {Review}
