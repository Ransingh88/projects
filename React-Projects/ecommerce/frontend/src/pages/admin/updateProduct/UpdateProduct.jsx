import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors } from '../../../redux/features/product/createProduct/createProductSlice'
import { clearError as updateClearError, updateAdminProduct } from '../../../redux/features/product/adminProduct/adminProductThunks'
// import './createProduct.css'
import loginBgImage from '../../../Assets/image/shopping-login.jpeg'
import { fetchProductDetails } from '../../../redux/features/product/productDetails/productDetailsThunk'
import { updateAdminProductReset } from '../../../redux/features/product/adminProduct/adminProductSlice'

const UpdateProduct = () => {

  const catagories = [
    "men",
    "women",
    "footwear",
    "bottom",
    "tops",
    "mobile",
    "laptop",
    "book",
    "electronic",
    "camera",
    "clothes"
    
]
const dispatch = useDispatch()
const navigate = useNavigate()
const {id:productId} = useParams()
const {isUpdated,loading,error:updateError,} = useSelector(state=>state.adminProduct)
const {error, productDetails:product} = useSelector(state=>state.productDetail)

const [name,setName] = useState('')
const [description,setDescription] = useState('')
const [price,setPrice] = useState(0)
const [catagory,setCatagory] = useState('')
const [stock,setStock] = useState(1)
const [images,setImages] = useState([])
const [oldImages,setOldImages] = useState([])
const [imagePriview,setImagePriview] = useState([])


const handleUpdateProduct = () => {
  const myForm = new FormData()

        myForm.set("name",name)
        myForm.set("description",description)
        myForm.set("price",price)
        myForm.set("catagory",catagory)
        myForm.set("stock",stock)
        
        images.forEach((myImage)=>{
          myForm.append("images",myImage)
        })

        dispatch(updateAdminProduct(productId,myForm))
}

const updateProductImageChange = (e)=>{
  const files = Array.from(e.target.files)
  setImages([])
  setImagePriview([])
  setOldImages([])

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

    if(product && product._id !== productId){
        dispatch(fetchProductDetails(productId))
    }else{
        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
        setCatagory(product.catagory)
        setStock(product.stock)
        setOldImages(product.images)
    }

  if(updateError){
      toast.error(updateError)
      dispatch(updateClearError())
  }
  if(error){
      toast.error(error)
      dispatch(clearErrors())
  }
  if(isUpdated){
    // toast.success('Product Craeted Successfully')
    navigate('/admin/allproducts')
    dispatch(updateAdminProductReset())
  }
},[dispatch, updateError, isUpdated, navigate, error, product, productId])

  return (
    <>
    <div>
       {/* <h1 className='dashboard_heading'><span>Create New Product</span></h1> */}
    </div>
    <main className='container-fluid mainNewProductContainer'>
    <div className="container newProductContainer">
        <div className='newProductGraficSection'>
            
                <img src={loginBgImage} alt="shopping bg" />
            
        </div>
        <div className='newProductFormSection'>
        <section className="newProduct-section">
        <div>
          <h1 className='dashboard_heading'><span>Update Product</span></h1>
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
          <input type="file" name='image' accept='image/*' multiple onChange={updateProductImageChange}/>
        </div>
        <div className='createProduct_imagePreview'>
              {oldImages && oldImages.map((imag,indx)=>(
                <img src={imag.url} key={indx} alt="avatar preview" />
              ))}
        </div>
        <div className='createProduct_imagePreview'>
              {imagePriview.map((imag,indx)=>(
                <img src={imag} key={indx} alt="avatar preview" />
              ))}
        </div>
        <button disabled={loading ? true : false} className='btn btn-primary btn-create' onClick={handleUpdateProduct}>Update</button>
       </div>
    </div>
        </section>
        </div>
    </div>
</main>
</>
  )
}

export default UpdateProduct