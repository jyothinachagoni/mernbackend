import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from 'axios'
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
<main>
    <section className={adminStyles.bread}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
            <h5>Admin Dashboard</h5>
        </div>
        </div>
        </div>
        </section>
        <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
      <Sidebar/>
            </div>
            <div className="col-md-9">
      <Outlet/>
      </div>
          </div>
        </div>
      </section>
        </main>
  )
}

export default AdminDashboard