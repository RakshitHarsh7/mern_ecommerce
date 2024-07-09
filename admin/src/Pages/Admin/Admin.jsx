import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from "react-router-dom"
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
        {/* jab /addproduct ke route pe aaenge then AddProduct mount ho jaega */}
            <Route path='/addproduct' element={<AddProduct />}/> 
            {/* jab /listproduct ke route pe aaenge then ListProduct mount ho jaega */}
            <Route path='/listproduct' element={<ListProduct />}/>
        </Routes>
    </div>
  )
}

export default Admin