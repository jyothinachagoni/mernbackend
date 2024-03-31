import React from 'react'
import headerstyles from './header.module.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className={headerstyles.header}>
    <div className={headerstyles.topbar}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <ul>
                        <li>
<NavLink to="tel:+91 9765871874">9765871874</NavLink>
                        </li>
                        <li>
                        <NavLink to="mailto:jyothinachagoni@gmail.com">jyothinachagoni@gmail.com</NavLink>
                            </li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    
                    <NavLink to="/"><button>support</button></NavLink>
                    
                </div>
            </div>
     </div>       
    </div>
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">E-learn</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/appointment">Book Appointment </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/aboutus">Abous us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/treatment">Treatment</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
      </li>
    
    </ul>
  </div>
</nav>
</div>
    </header>
  )
}

export default Header