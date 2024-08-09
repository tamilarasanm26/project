import mongoose from "mongoose";

const productSechmea= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique: true
    },
    price:{
        type:Integer,
        required:true
    }
},{timestamps:true})


const ProductModel= mongoose.model('products',productSechmea)


export default  ProductModel
