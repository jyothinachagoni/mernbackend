import React, { useEffect, useState } from 'react'
import adminStyles from "./admin.module.css";
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditTreatment = () => {
  
    const [tname, setTname] = useState("");
    const [tdesc, setTdesc] = useState("");

    const{tid}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:4000/treatment/${tid}`)
        .then((res)=>{
          setTname(res.data.tname)
          setTdesc(res.data.tdesc)
console.log(res)
        })
        .catch((err)=>{
console.log(err)
        })
    },[])
    const submitHandler=(e)=>{
e.preventDefault();
    axios.put(`http://localhost:4000/treatment/${tid}`, {tname, tdesc})
    .then(()=>{
      alert("updated succe")
      navigate("/admindashboard/deletetreatment")
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
            <h5>Edit Treatment</h5>
        </div>
        </div>
        </div>
        </section>
        <section >
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-md-5">
              <form className={adminStyles.bx_shadow} onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={tname}
                     onChange={(e) => setTname(e.target.value)}
                    placeholder="Treatment Name"
                    name="tname"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    value={tdesc}
                   onChange={(e) => setTdesc(e.target.value)}
                    placeholder="Treatment Description"
                    name="tdesc"
                  ></textarea>
                 <button className="btn btn-primary mt-3">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
   </main>
  )
}

export default EditTreatment