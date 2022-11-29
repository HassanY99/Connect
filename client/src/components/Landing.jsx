import React from 'react'
import '../index.css';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const Landing = ({ isAuthenticated }) => {

  if(isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (

<header className='background'>


    <header className="flex flex-col justify-center h-screen  ">
  <h1 className="ml-24 text-white text-6xl tracking-tight font-serif leading-none">Let's Connect!</h1>
  <p className="mt-4 mx-24 text-lg text-grey font-sans opacity-45">A platform where people from all over the world with similar profession and interests can showcase their skills, share posts and get help.</p>
  <div className="flex justify-start mt-12 ml-24">
  <p className="p-2">
    <Link className="px-4 py-2 border-2 border-white rounded text-white text-lg hover:bg-turq hover:border-black hover:text-black" to="/login">Login</Link>
  </p>
  <p className="p-2">
    <Link className="px-4 py-2 border-2 border-white rounded text-white text-lg hover:bg-gray hover:border-black hover:text-black" to="/register">Sign up</Link>
  </p>
  </div>
</header>
</header>

  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
