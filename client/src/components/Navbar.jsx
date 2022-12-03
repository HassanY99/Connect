import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types'

const Navbar = ({ logout, auth: { isAuthenticated, loading }}) => {


    const authLinks = (
        <ul >
          <li>
          <Link to="/dashboard">
          <i className="fas fa-user"></i>{' '}
            Dashboard</Link>
        </li>
        <li>
          <Link to="/posts">
            Posts</Link>
        </li>
        <li>
          <Link to="/profiles" >Developers</Link>
        </li>
        <li>
          <Link onClick={logout} to="/" >
            <i className="fas fa-sign-out-alt"></i>{' '}
            Logout</Link>
        </li>  

      </ul>
    );


    const guestLinks = (
        <ul >
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/profiles" >Developers</Link>
        </li>
        <li>
          <Link to="/register" >Register</Link>
        </li>
        <li>
          <Link to="/login" >Login</Link>
        </li>  
      </ul>
    );

  return (

    <nav class="navbar bg-black py-4">
    <h1>
    <Link to="/" className="text-[24px]">
         <span className="font-opensans text-turq"> 
         <i class="fas fa-users text-grey"></i>{' '}
         Connect</span>
     </Link>
    </h1>
    <ul>
    <div className="font-opensans flex justify-end">
       {!loading && (<div>{isAuthenticated ? authLinks : guestLinks}</div>)}
     </div>
    </ul>
  </nav>



  )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)
