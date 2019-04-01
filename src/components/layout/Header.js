import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className='container' >
        <a className="navbar-brand" href="/">{props.branding}</a>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className='nav-item' ><Link className="nav-link" to="/">Home</Link></li>
                <li className='nav-item' ><Link className="nav-link" to="/addcontact">Add Contacts</Link></li>
                <li className='nav-item' ><Link className="nav-link" to="#">Pricing</Link></li>
            </ul>
          </div>  
         </div> 
      </nav>
    
  )
}

export default Header;
