import React from 'react'
import ProductCard from '../../../components/productCard/ProductCard'
import './exclusiveProducts.css'

const ExclusiveProducts = () => {

    const filters = [
        {
            label:'Everything',
            active:true
        },
        {
            label:'popular',
        },
        {
            label:'hot'
        },
        {
            label:'recent'
        },
        {
            label:'products'
        },
        {
            label:'work'
        },
        {
            label:'filter'
        }
    ]

    const excProducts =[
        {
            image:"pexels-gabriel-freytez-341523",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-garrett-morrow-1649771",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-laryssa-suaid-1667071",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-math-90946",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-pixabay-256198",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-pixabay-279906",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-tree-of-life-seeds-3259600",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-gabriel-freytez-341523",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-garrett-morrow-1649771",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-laryssa-suaid-1667071",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-math-90946",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-pixabay-256198",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-pixabay-279906",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-tree-of-life-seeds-3259600",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },{
            image:"pexels-gabriel-freytez-341523",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-garrett-morrow-1649771",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        {
            image:"pexels-pixabay-279906",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:true
        },
        {
            image:"pexels-tree-of-life-seeds-3259600",
            title:"lether hand bag",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            price:"1599",
            rating:4.5,
            fevorite:false
        },
        
    
    ]
  return (
    <section className='exclusiveProducts'>
        <h1 className='heading exclusiveProduct-heading'><span>Exclusive</span> Products</h1>
        <div className="exclusiveProduct-filters">
            {filters.map((item,index)=>(
                <p key={index} className={`filters_item ${item.active?'filters_item-active':null}`}>{item.label}</p>
            ))}
        </div>
        <div className="exclusiveProduct-items">
            {excProducts.map((item)=>(
                <ProductCard {...item}/>
            ))}
        </div>
    </section>
  )
}

export default ExclusiveProducts