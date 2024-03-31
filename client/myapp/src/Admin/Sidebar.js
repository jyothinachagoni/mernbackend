import React from 'react'
import { NavLink } from 'react-router-dom'
import adminStyles from "./admin.module.css";
const Sidebar = () => {
  return (
    <div className={adminStyles.sidebar}>
        <ul>
          <NavLink to="">  <li>AddTreatments</li></NavLink>
          <NavLink to="deletetreatment">  <li>Edit/Delete</li></NavLink>
        </ul>
    </div>
  )
}

export default Sidebar