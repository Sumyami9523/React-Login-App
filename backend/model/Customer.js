const mongoose=require('mongoose')
const custSchema=new mongoose.Schema({
    custName:String,
    custNum:Number,
    city:String,
    state:String,
    pincode:Number
})
const CustModel=mongoose.model("customers",custSchema)
module.exports=CustModel