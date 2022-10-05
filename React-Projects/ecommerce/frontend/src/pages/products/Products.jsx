import React from 'react'
import './products.css'
import 'rc-slider/assets/index.css';

import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import Slider from 'rc-slider';

import Pagination from 'react-js-pagination'
import Loader from '../../components/layout/loader/Loader'
import ProductCard from '../../components/productCard/ProductCard'

import { useEffect } from 'react'
import { fetchAllProducts } from '../../redux/features/product/productThunks'
import { useState } from 'react'
import ProductNotFound from '../../components/notFound/ProductNotFound';
import Button from '../../components/button/Button';
import { clearErrors } from '../../redux/features/product/productSlice';
import { toast } from 'react-toastify';

const Products = () => {

    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)
    const [price,setPrice] = useState([0,2000000])
    const [ratings,setRatings] = useState(0)
    const [minMaxPrice] = useState([0,200000])
    const [catagory,setCatagory] = useState('')
    const marksPrice = {
        [minMaxPrice[0]]:price[0],
        [minMaxPrice[1]]:price[1]
    }
    const marksRatings = {
        0:'0⭐',
        1:'1⭐',
        2:'2⭐',
        3:'3⭐',
        4:'4⭐',
        5:'5⭐'
    }
    

    const {products,loading,resultPerPage,filteredProductCount,error} = useSelector(state=>state.product)
    const {keyword} = useParams()

    const catagories = [
        "men",
        "women",
        "footwear",
        "bottom",
        "tops",
        "mobile",
        "laptop",
        "book",
        "electronic ",
        "camera",
        "clothes"
        
    ]
    

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if(filteredProductCount <= resultPerPage){
            setCurrentPage(1)
        }
        dispatch(fetchAllProducts(keyword,currentPage,price,catagory,ratings))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch,keyword,currentPage,catagory,error])

    const handlePagination = (e)=>{
        setCurrentPage(e)
    }

    const handlePriceSlider = (e)=>{
        setPrice(e)
    }
    const handleApplyFilter = () => {
        if(filteredProductCount <= resultPerPage){
            setCurrentPage(1)
        }
        dispatch(fetchAllProducts(keyword,currentPage,price,catagory,ratings))
    }
    const handleResetFilter = () =>{
        dispatch(fetchAllProducts())
        setRatings(0)
        setPrice([0,200000])
    }

  return ( 
    <>{loading ? <Loader/> :
        <main className='container-fluid mainProductsContainer'>
            <section className='headingCatagoryWall'>
            <h1 className='heading customerReview-heading'>Products<span></span></h1>
            </section>
            <section className='container productsContainer'>
                <div className='filter-section'>
                    
                <div className="catagory-filter">
                <p className='filter-Heading'>Catagory</p>
                <ul className='catagory-list'>
                    {catagories.map((catagory)=>(
                        <li
                        onClick={()=>setCatagory(catagory)}
                        id={catagory}
                        >
                        {catagory}
                        </li>
                    ))}
                </ul>
                </div>
                <div className='price-filter'>
                        <p className='filter-Heading'>Price</p>
                        <div className='filter-priceSlider'>
                        <Slider 
                            range
                            allowCross={false}
                            defaultValue={price}
                            min={minMaxPrice[0]}
                            max={minMaxPrice[1]}
                            onChange={handlePriceSlider}
                            step={100}
                            marks={marksPrice}
                            trackStyle={[{ backgroundColor: '#6060f1' }]}
                            handleStyle={[{ backgroundColor: '#6060f1',borderColor:'#6060f1' }, { backgroundColor: '#6060f1',borderColor:'#6060f1' }]}
                        />
                        </div>
                        
                </div>
                <div className='price-filter'>
                        <p className='filter-Heading'>Ratings</p>
                        <div className='filter-priceSlider'>
                        <Slider 
                            allowCross={false}
                            defaultValue={ratings}
                            min={0}
                            max={5}
                            onChange={(e)=>{setRatings(Number(e))}}
                            step={1}
                            marks={marksRatings}
                            trackStyle={[{ backgroundColor: '#6060f1' }]}
                            handleStyle={[{ backgroundColor: '#6060f1',borderColor:'#6060f1' }, { backgroundColor: '#6060f1',borderColor:'#6060f1' }]}
                        />
                        </div>
                        
                </div>
                <Button title="Apply Filter" className="btn-filter" onclick={handleApplyFilter}/>
                <Button title="Reset Filters" className="btn-filter" onclick={handleResetFilter}/>
                
                </div>
                <div className='products-section'>
                    <p className='productItemCount'>{filteredProductCount} items found</p>
            <div className='productsItem-container'>
            <div className='products_item'>
            {products.length < 1 ? <ProductNotFound title='No Item Found'/> : products && products.map((item,index)=>(
            <Link key={index} to={`/product/${item.catagory}/${item._id}`}><ProductCard  {...item} /></Link>
        ))}
        </div>
        {resultPerPage < filteredProductCount && <div className='products_pagination'>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={filteredProductCount}
                onChange={handlePagination}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass='pageItem'
                linkClass='pageLink'
                activeClass='pageItem-active'
                activeLinkClass='pageLink-active'
            />
        </div>}
        </div>
        </div>
        </section>
        </main>
    }</>
  )
}

export default Products