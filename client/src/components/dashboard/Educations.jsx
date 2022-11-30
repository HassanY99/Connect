import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'

const Educations = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td className='text-white'>{edu.school}</td>
      <td className="hide-sm text-white">{edu.degree}</td>
      <td className="hide-sm text-white">
       <Moment className="hide-sm" format='YYYY/MM/DD' >{edu.from}</Moment> - {edu.to === null ? (' Present') : (<Moment className="hide-sm" format='YYYY/MM/DD' >{edu.from}</Moment>)}
      </td>
      <td>
        <button
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Educations.propTypes = {
  education: PropTypes.array.isRequired,
};

export default connect()(Educations);