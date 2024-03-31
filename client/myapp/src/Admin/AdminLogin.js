import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const navigate = useNavigate();

    const submitHandler = (e)=>{
e.preventDefault();
axios.post(`http://localhost:4000/login`, {email, password})
.then((res)=>{
    if(res.data == "Valid"){
navigate("/admindashboard")
    }
    else{
        alert("Invalid credentials")
    }
  
})
.catch((err)=>
{console.log(err)})
    }

  return (
    <main>
        <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <h5>Admin Login</h5>
            </div>
            </div>
            </div></section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form className={adminStyles.bx_shadow} onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <input 
                  type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    name="password"
                  />
                  <button className="btn btn-primary mt-3">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminLogin