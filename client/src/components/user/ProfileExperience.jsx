import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className="text-black">{company}</h3>
    <p className='text-black'>
    <Moment className="text-black" format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment className="text-black" format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p className="text-black">
      <strong>Position: </strong> {title}
    </p>
    <p className="text-black">
      <strong>Location: </strong> {location}
    </p>
    <p className="text-black"> 
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;