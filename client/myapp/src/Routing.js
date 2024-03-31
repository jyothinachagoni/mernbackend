import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './innerPages/Home'
import Aboutus from './innerPages/Aboutus'
import Treatment from './innerPages/Treatment'
import ContactUs from './innerPages/ContactUs'
import Appointment from './innerPages/Appointment'
import AddTreatments from './Admin/AddTreatments'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard'
import DeleteTreatment from './Admin/DeleteTreatment'
import EditTreatment from './Admin/EditTreatment'
import Signup from './Admin/SignUp'
import TreatmentDetails from './innerPages/TreatmentDetails'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/treatment' element={<Treatment/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/treatmentdetails/:tid' element={<TreatmentDetails/>}/>
        <Route path='/edittreatment/:tid' element={<EditTreatment/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        

        <Route path='/admindashboard' element={<AdminDashboard/>}>
        <Route path="" element={<AddTreatments/>}/>
        <Route path='deletetreatment' element={<DeleteTreatment/>}/>
        </Route>
       
    </Routes>
  )
}

export default Routing