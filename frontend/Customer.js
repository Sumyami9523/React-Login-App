import { useState } from "react"
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'
import React from 'react'
function Customer(){
    const [cust,setCust]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(res=>setCust(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDelete=(id)=>{
        axios.delete('http://localhost:3000/deleteCustomer/'+id)
        .then(res=>{console.log(res)
                    window.location.reload()})
        .catch(err=>console.log(err))
    }
    return( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create' className='btn btn-success'>Add Customer</Link>
                <br/>
                <br/>
                <Link to='/search' className="btn btn-success">Search for Customer</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Number</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pincode</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cust.map((c)=>{
                                return <tr>
                                    <td>{c.custName}</td>
                                    <td>{c.custNum}</td>
                                    <td>{c.city}</td>
                                    <td>{c.state}</td>
                                    <td>{c.pincode}</td>
                                    <td>
                                        <Link to={`/update/${c._id}`} className='btn btn-success'>Update</Link>
                                        <button className="btn btn-danger" onClick={()=>{handleDelete(c._id)}}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Customer