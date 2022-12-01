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

    <nav class="navbar bg-dark">
    <h1>
    <Link to="/" className="">
         <span className="font-opensans"> 
         <i class="fas fa-users"></i>{' '}
         Connect</span>
     </Link>
    </h1>
    <ul>
    <div className="font-serif">
       {!loading && (<div>{isAuthenticated ? authLinks : guestLinks}</div>)}
     </div>
    </ul>
  </nav>

/* <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    {/* Logo */
    // <Link to="/" className="flex items-center">
    //     <span className="self-center text-2xl font-opensans whitespace-nowrap dark:text-white"><i className='fas fa-code'></i> Connect</span>
    // </Link>
    
    // {/* Links */}
    // <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //   {!loading && (<div>{isAuthenticated ? authLinks : guestLinks}</div>)}
    // </div>

  // </div>
// </nav> */}


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
