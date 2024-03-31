import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [uname, setUname]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const [password, setPassword]=useState("")
    const [cpassword, setCpassword]=useState("")
    const [address, setAddress]=useState("")
    const navigate = useNavigate();

    const submitHandler = (e)=>{     
e.preventDefault();
axios.post("http://localhost:4000/signup", {
    uname, email, phone, password, cpassword, address
})
.then((res)=>{
alert("user added succ..")
navigate("/admin")
})
.catch((err)=>{
console.log(err)
})
}
    
  return (
    <main>
        <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <h5>SignUp</h5>
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
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="User Name"
                    name="uname"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    name="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number"
                    name="Mobile Number"
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
                </div>
                <div className="mb-3">
                  <input
                    type="cpassword"
                    className="form-control"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    placeholder="password"
                    name="password"
                  />
                </div>
                <div className="mb-3">
                  <input 
                  type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="address"
                    name="address"
                  />
                  <button className="btn btn-primary mt-3">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Signup