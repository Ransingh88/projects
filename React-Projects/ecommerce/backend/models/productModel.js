const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name']
    },
    description:{
        type:String,
        required:[true,'Please enter product description']
    },
    price:{
        type:Number,
        required:[true,'Please enter product price'],
        maxLength:[8, 'price cannot exceed 8 characters']
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    catagory:{
        type:String,
        required:[true,'Please enter product catagory']
    },
    stock:{
        type:Number,
        required:[true,'Please enter product price'],
        maxLength:[4, 'price cannot exceed 4 characters'],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]
},
{
    timestamps: true,
	versionKey: false,
}
)

module.exports = mongoose.model('Product',productSchema)