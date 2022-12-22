import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors, createNewProductsReset } from '../../../redux/features/product/createProduct/createProductSlice'
import './createProduct.css'
import { createNewProducts } from '../../../redux/features/product/createProduct/createProductThunks'
import loginBgImage from '../../../Assets/image/shopping-login.jpeg'

const CreateProduct = () => {

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
const dispatch = useDispatch()
const navigate = useNavigate()
const {loading,error,success} = useSelector(state=>state.newProduct)

const [name,setName] = useState('')
const [description,setDescription] = useState('')
const [price,setPrice] = useState(0)
const [catagory,setCatagory] = useState('')
const [stock,setStock] = useState(1)
const [images,setImages] = useState([])
const [imagePriview,setImagePriview] = useState([])


const handleCreateProduct = () => {
  const myForm = new FormData()

        myForm.set("name",name)
        myForm.set("description",description)
        myForm.set("price",price)
        myForm.set("catagory",catagory)
        myForm.set("stock",stock)
        
        images.forEach((myImage)=>{
          myForm.append("images",myImage)
        })

        dispatch(createNewProducts(myForm))
}

const createProductImageChange = (e)=>{
  const files = Array.from(e.target.files)
  setImages([])
  setImagePriview([])

  files.forEach((file)=>{
    const reader = new FileReader()
    reader.onload = ()=>{
      if(reader.readyState === 2){
        setImagePriview((old)=>[...old, reader.result])
        setImages((old)=>[...old, reader.result])
      }
  }

    reader.readAsDataURL(file)
  })
}



useEffect(()=>{
  if(error){
      toast.error(error)
      dispatch(clearErrors())
  }
  if(success){
    // toast.success('Product Craeted Successfully')
    navigate('/admin/dashboard')
    dispatch(createNewProductsReset())
  }
},[dispatch,error,success,navigate])

  return (
    <>
    <div>
       {/* <h1 className='dashboard_heading'><span>Create New Product</span></h1> */}
       {/* <div>
        <div>
          <p>Name</p>
          <input type="text" placeholder='Product Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <p>Description</p>
          <textarea name="" id="" cols="30" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <p>Price</p>
          <input type="Number" placeholder='Product Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div>
          <p>Stock</p>
          <input type="Number" placeholder='Product Stock' value={stock} onChange={(e)=>setStock(e.target.value)}/>
        </div>
        <div>
        <p>Select Catagory</p>
          <select name="" id="" value={catagory} onChange={(e)=>setCatagory(e.target.value)}>
          <option value="">Select Catagory</option>
            {catagories.map((cata)=>(
              <option key={cata} value={cata}>{cata}</option>
            ))}
          </select>
        </div>
        <div>
          <input type="file" name='image' accept='image/*' multiple onChange={createProductImageChange}/>
        </div>
        <div>
              {imagePriview.map((imag,indx)=>(
                <img src={imag} key={indx} alt="avatar preview" />
              ))}
        </div>
        <button disabled={loading ? true : false} className='btn btn-primary' onClick={handleCreateProduct}>Create</button>
       </div> */}
    </div>
    <main className='container-fluid mainNewProductContainer'>
    <div className="container newProductContainer">
        <div className='newProductGraficSection'>
            
                <img src={loginBgImage} alt="shopping bg" />
            
        </div>
        <div className='newProductFormSection'>
        <section className="newProduct-section">
        <div>
          <h1 className='dashboard_heading'><span>Create New Product</span></h1>
       <div>
        <div>
          <p>Name</p>
          <input type="text" placeholder='Product Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <p>Description</p>
          <textarea name="" id="" cols="30" rows="2" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <div className='createProduct_priceStock'>
        <div>
          <p>Price</p>
          <input type="Number" placeholder='Product Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div>
          <p>Stock</p>
          <input type="Number" placeholder='Product Stock' value={stock} onChange={(e)=>setStock(e.target.value)}/>
        </div>
        </div>
        <div>
          <select name="" id="" value={catagory} onChange={(e)=>setCatagory(e.target.value)}>
          <option value="">Select Catagory</option>
            {catagories.map((cata)=>(
              <option key={cata} value={cata}>{cata}</option>
            ))}
          </select>
        </div>
        <div>
          <input type="file" name='image' accept='image/*' multiple onChange={createProductImageChange}/>
        </div>
        <div className='createProduct_imagePreview'>
              {imagePriview.map((imag,indx)=>(
                <img src={imag} key={indx} alt="avatar preview" />
              ))}
        </div>
        <button disabled={loading ? true : false} className='btn btn-primary btn-create' onClick={handleCreateProduct}>Create</button>
       </div>
    </div>
        </section>
        </div>
    </div>
</main>
</>
  )
}

export default CreateProduct