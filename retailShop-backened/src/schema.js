import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({

    name:{
        type:String,
        require:[true,"Please add the product name"],

    },
    price:{
        type:Number,
        require:[true,"Please add Price of product"],
        
    },

    image:{
        type:String,
        require:[true,"image URL"],
    },
})
const Product=mongoose.model("Product",ProductSchema);
export default Product;