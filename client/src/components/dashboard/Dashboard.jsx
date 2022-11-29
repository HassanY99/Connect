import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile'
import { useEffect } from 'react';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {

     useEffect(() => {
      getCurrentProfile();
    }, []);
    

  return (
    <div className='text-white'>Dashboard : {profile.profile.user.name}</div>
  )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)