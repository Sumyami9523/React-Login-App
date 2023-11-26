const mongoose=require('mongoose')
const cors=require('cors')
const express=require('express')
const CustModel=require('./model/Customer')
const CredModel=require('./model/Credential')
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1/ABC')
app.get('/',(req,res)=>{
    CustModel.find({})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.post('/createCustomer',(req,res)=>{
    CustModel.create(req.body)
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.get('/getCustomer/:id',(req,res)=>{
    const id=req.params.id;
    CustModel.findById({_id:id})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.get('/getCustomerByNumber/:no',(req,res)=>{
    const no=req.params.no;
    CustModel.findOne({custNum:no})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.get('/checkUniqueCustNum/:no', async (req, res) => {
    const no = req.params.no;
    try {
        const existingCustomer = await CustModel.findOne({ custNum: no });
        res.json({ isUnique: !existingCustomer });
    } catch (error) {
        console.error('Error checking unique custNumber:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.put('/updateCustomer/:id',(req,res)=>{
    const id=req.params.id;
    CustModel.findByIdAndUpdate({_id:id},{custName:req.body.custName,custNum:req.body.custNum,city:req.body.city,state:req.body.state,pincode:req.body.pincode})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.delete('/deleteCustomer/:id',(req,res)=>{
    const id=req.params.id;
    CustModel.findByIdAndDelete({_id:id})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})
app.post('/register',(req,res)=>{
    CredModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post('/login',(req,res)=>{
    const {email,password}=req.body
    CredModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('Success')
            }
            else{
                res.json('You have entered wrong password')
            }
        }
    })
})
app.listen(3000,()=>{
    console.log('Server is running')
})