import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile';

const Educations = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td className='text-white'>{edu.school}</td>
      <td className="hide-sm text-white">{edu.degree}</td>
      <td className="hide-sm text-white">
       <Moment className="hide-sm" format='YYYY/MM/DD' >{edu.from}</Moment> - {edu.to === null ? (' Present') : (<Moment className="hide-sm" format='YYYY/MM/DD' >{edu.from}</Moment>)}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
        >
          <i class="fa fa-trash text-red" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-5 text-yellow font-sans flex justify-center text-[22px]">Education Credentials</h2>
      <div className='mx-12'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">School</th>
            <th scope="col">Degree</th>
            <th scope="col">Years</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
      </div>
    </Fragment>
  );
};

Educations.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Educations);