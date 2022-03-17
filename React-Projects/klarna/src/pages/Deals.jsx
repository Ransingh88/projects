import React from 'react'
import Card from '../components/card/Card'
import './deals.css'

const Deals = () => {
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
                        <p className='active'>All</p>
                        <p>Babies & Kids</p>
                        <p>Clothing & Apparel</p>
                        <p>Computers & Accessories</p>
                        <p>Consumer Electronics</p>
                        <p>Gifts</p>
                        <p>Health & Beauty</p>
                        <p>Holidays & Occasions</p>
                        <p>Household</p>
                        <p>Media</p>
                        <p>See all 14</p>
                    </div>
                </div>
                <div className="filterSection__filter">
                <p className='filter__Headings'>Filter</p>
                    <div className="filter__type">Type</div>
                    <div className="filter__discount">Discount</div>
                </div>
            </div>
            <div className="content__productSection">
                <div className="productSection__search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="productSection__sort">
                    <p>80 deals</p>
                    <button>Featured</button>
                </div>
                <div className="productSection__products">
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453210/klarna/image--bSIVkQ_qa8mun.png'} title={'ELEMIS'} desc={'Find the truth in skincareh'}/>
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453211/klarna/image--DsvIFD_cbwapa.jpg'} title={'ELEMIS'} desc={'Find the truth in skincare'}/>
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453210/klarna/image--bSIVkQ_qa8mun.png'} title={'ELEMIS'} desc={'Find the truth in skincare'}/>
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453210/klarna/image--bSIVkQ_qa8mun.png'} title={'ELEMIS'} desc={'Find the truth in skincare'}/>
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453210/klarna/image--bSIVkQ_qa8mun.png'} title={'ELEMIS'} desc={'Find the truth in skincare'}/>
                    <Card img={'https://res.cloudinary.com/dransinghdev/image/upload/v1647453210/klarna/image--bSIVkQ_qa8mun.png'} title={'ELEMIS'} desc={'Find the truth in skincare'}/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals