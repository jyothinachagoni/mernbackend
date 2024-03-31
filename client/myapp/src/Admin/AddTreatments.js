import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from 'axios'
const AddTreatments = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");

const submitForm=(e)=>{
 e.preventDefault();
axios.post("http://localhost:4000/treatment", {tname, tdesc})
.then ((res)=>{
    alert("data added successfully")
    setTname("");
    setTdesc("");
}).catch((err)=>{
console.log(err)
})

  }
  return (
    <main>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form className={adminStyles.bx_shadow} onSubmit={submitForm}>
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
  );
};

export default AddTreatments;
