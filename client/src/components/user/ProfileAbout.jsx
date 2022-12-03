import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className='profile-about bg-blue-100 p-2 font-opensans rounded-md'>
    {bio && (
      <Fragment>
        <h2 className='text-primary font-opensans'>{name.trim().split(' ')[0]}'s Bio</h2>
        <p className='text-black mt-2'>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    <h2 className='text-primary font-opensans'>Skill Set</h2>
    <div className='skills text-red font-opensans'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1 font-opensans'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;