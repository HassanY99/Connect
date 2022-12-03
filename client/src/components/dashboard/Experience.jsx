import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td className='text-white'>{exp.company}</td>
      <td className="hide-sm text-white">{exp.title}</td>
      <td className="hide-sm text-white">
       <Moment className="hide-sm" format='YYYY/MM/DD' >{exp.from}</Moment> - {exp.to === null ? (' Present') : (<Moment className="hide-sm" format='YYYY/MM/DD' >{exp.from}</Moment>)}
      </td>
      <td>
        <button
        onClick={( )=> deleteExperience(exp.id)}
        >
          <i class="fa fa-trash text-red" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-5 text-yellow font-sans flex justify-center text-[22px]">Experience Credentials</h2>

    <div className='mx-12'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Years</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
      </div>






    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);