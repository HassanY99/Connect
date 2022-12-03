import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import { DashboardActions } from './DashboardActions';
import Experience from './Experience';
import Educations from './Educations';

const Dashboard = ({ getCurrentProfile, auth: { user }, deleteAccount, profile: { loading, profile} }) => {

     useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
    

  return loading && profile === null ? <i class="fa-solid fa-spinner"></i> : <div className='bg-grey-lighter min-h-screen flex flex-col background'>
    <h1 className='large text-turq font-sans flex justify-center mt-20'>Dasboard</h1>
    <Alert />
    <p className="lead text-[20px] flex justify-center" >Welcome, <span className='text-red ml-2'> { user.name} </span></p>
    {profile !== null ? <div><DashboardActions /> 
                              <Experience experience={profile.experience} />
                              <Educations education={profile.education} />
                              <div className="my-4 flex justify-center">
                                <button className='btn btn-danger' onClick={() => deleteAccount()}>
                                  <i className='fas fa-user-minus'> Delete My Account</i></button></div> </div> : <div>
        <p className='text-grey font-sans flex justify-center'>You do not have a profile, please create your profile.</p>
        <div className='flex justify-center mt-6'>
        <Link to='/create-profile' className='btn btn-primary'> Create Profile </Link> </div>
        </div>
        }
  </div>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard)