import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import './deals.css'
import { useDispatch, useSelector } from 'react-redux'
import {caragory,filterSearch,discount,filterType} from '../features/filter/filterSlice'
import { BiFilterAlt } from "react-icons/bi";

const Deals = () => {

    const [data,setData] = useState([])
    const [search,setSearch] = useState('')
   

    const datas = useSelector((state)=>state.filter.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        setData(datas)
    },[datas])


    const handleFilterCatagory =(e)=>{
        dispatch(caragory(e.target.innerText))
    }

    const handleSearch = ()=>{
        dispatch(filterSearch(search))
    }

    const handleFilterCheck = (e)=>{
        if(e.target.checked ===true){
            dispatch(discount(e.target.name))
        }else{
            dispatch(discount())
        }
    }
    const handleFilterChecktype = (e)=>{
        if(e.target.checked === true){
            dispatch(filterType(e.target.name))
        }else{
            dispatch(filterType())
        }
    }

    const handlePopUP = ()=>{
        console.log("popup clicked");
    }

    
  return (
    <div className='deals'>
        <div className="deals__heading">
            <h1 className='deals__head'>All deals and coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>
            <div className='deals__ad'>
                <p>Pay in 4 anywhere with the Chrome extension.<span>Add to Chrome </span></p>
                <div className='deals__closeIcon'>x</div>
            </div>
        </div>
        <div className="deals__content">
            <div className="content__filterSection">
                <div className="filterSection__catagory ">
                    <p className='filter__Headings'>Catagories</p>
                    <div className='filter__menus'>
                        <p className='active' onClick={handleFilterCatagory}>All</p>
                        <p onClick={handleFilterCatagory} >Babies & Kids</p>
                        <p onClick={handleFilterCatagory} >Clothing & Apparel</p>
                        <p onClick={handleFilterCatagory} >Computers & Accessories</p>
                        <p onClick={handleFilterCatagory} >Consumer Electronics</p>
                        <p onClick={handleFilterCatagory} >Gifts</p>
                        <p onClick={handleFilterCatagory} >Health & Beauty</p>
                        <p onClick={handleFilterCatagory} >Holidays & Occasions</p>
                        <p onClick={handleFilterCatagory} >Household</p>
                        <p onClick={handleFilterCatagory} >Media</p>
                        <p onClick={handleFilterCatagory} >See all 14</p>
                    </div>
                </div>
                <div className="filterSection__filter">
                <p className='filter__Headings'>Filter</p>
                    <div className="filter__type ">
                        <p className='filter__subhead'>Type</p>
                        <div className='filter__checkbox'>
                            <input type="checkbox" name="Only Coupons" id="" onClick={handleFilterChecktype} />
                            <label htmlFor="Only Coupons">Only Coupons</label>
                        </div>
                        <div className='filter__checkbox'>
                            <input type="checkbox" name="Exclusives" id="" onClick={handleFilterChecktype} />
                            <label htmlFor="Exclusives">Exclusives</label>
                        </div>
                        <div className='filter__checkbox'>
                            <input type="checkbox" name="BOGO and more" id="" onClick={handleFilterChecktype} />
                            <label htmlFor="BOGO and more">BOGO and more</label>
                        </div>
                    </div>
                    <div className="filter__discount">
                        <p className='filter__subhead'>Discount</p>
                        <div className='filter__checkbox'>
                            <input type="checkbox" name="0-49" id="" onClick={handleFilterCheck}/>
                            <label htmlFor="0-49">0-49% off</label>
                        </div>
                        <div className='filter__checkbox'>
                            <input type="checkbox" name="50-80" id="" onClick={handleFilterCheck}/>
                            <label htmlFor="50-80">50-80% off</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-menus'>
            <div className='mobile-filter__menus'>
                        <p className='' onClick={handleFilterCatagory}>All</p>
                        <p onClick={handleFilterCatagory} >Babies & Kids</p>
                        <p onClick={handleFilterCatagory} >Clothing & Apparel</p>
                        <p onClick={handleFilterCatagory} >Computers & Accessories</p>
                        <p onClick={handleFilterCatagory} >Consumer Electronics</p>
                        <p onClick={handleFilterCatagory} >Gifts</p>
                        <p onClick={handleFilterCatagory} >Health & Beauty</p>
                        <p onClick={handleFilterCatagory} >Holidays & Occasions</p>
                        <p onClick={handleFilterCatagory} >Household</p>
                        <p onClick={handleFilterCatagory} >Media</p>
                        <p onClick={handleFilterCatagory} >See all 14</p>
            </div>
            </div>
            <div className="content__productSection">
                <div className="productSection__search">
                    <input type="text" placeholder='Search' onKeyUp={handleSearch} onChange={e=>setSearch(e.target.value)}/>
                </div>
                <div className="productSection__sort">
                    <p className='sort__result'>{data.length} deals</p>
                    <div className='sort__featureFilter'>
                    <select className='sort__feature' name="" id="">
                        <option value="">Featured</option>
                        <option value="">A-Z</option>
                        <option value="">Newest</option>
                    </select>
                    <BiFilterAlt className='filterIcon'/>
                    </div>
                </div>
                <div className="productSection__products">

                    {data.length <= 0 ? <p>No matches found</p>:data.map((ele,k)=>(
                    
                        <Card key={k} img={ele.image} title={ele.title} desc={ele.title} discount={ele.discount} popup={handlePopUP}/>

                        
                    
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals