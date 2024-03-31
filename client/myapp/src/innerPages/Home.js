import React, { useEffect, useState } from 'react'
import homebanner1 from './images/homebanner1.jpg'
import homestyles from './home.module.css'
import treatmentstyles from './treatment.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [treatments, setTreatments]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/treatment")
        .then((result) => {
            setTreatments(result.data)

        }).catch((err) => {
          console.log(err)  
        });
        },[])
   
  return (
    <main>
        <section>
<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-12 p-0'>
    <div className={homestyles.img}>
   
        <img src={homebanner1}/>
        </div>
        </div>
        </div>
        </div>
        </section>
        <section>
            <div className='container'>
                <div className='row'>
                    <h1 className={homestyles.title} >Treatments</h1>
                    <div className='row'>
    {treatments.map((data)=>{
       return <div className='col-md-3'>
        <div className={treatmentstyles.bshadow}><NavLink to={`/treatmentdetails/${data._id}`}>{data.tname}</NavLink></div></div>
    })}
    </div>
                </div>
            </div>
        </section>
    </main>
   
  )

}

export default Home