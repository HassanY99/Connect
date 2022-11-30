import React from 'react'
import PropTypes from 'prop-types'
import { addExperience } from '../../actions/profile'
import { connect } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddExperience = ({ addExperience }) => {

    const [formData, setFormData] = useState({
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: ''
    });

    const [toDateDisbaled, toggleDateDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const history = useNavigate();

  return (
    <div>
        <h1 class="large text-primary">
       Add An Experience
      </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => {
        e.preventDefault();

        addExperience(formData);

        history('/dashbaord');
        history('/dashboard', {replace: true});
      }}>
        <div class="form-group ">
          <input type="text" placeholder="* Job Title" className='text-black' name="title" value={title} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" className='text-black' name="company" value={company} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" className='text-black' name="location" value={location} onChange={e => onChange(e)} />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" className='text-black' value={from} onChange={e => onChange(e)} />
        </div>
         <div class="form-group">
          <p><input type="checkbox" name="current" className='text-black' checked={current} value={current} onChange={e => {setFormData({ ...formData, current: !current});
                                                                                    toggleDateDisabled(!toDateDisbaled)}} />{' '} Current Job</p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" className='text-black' value={to} onChange={e => onChange(e)} disabled={toDateDisbaled ? 'disabled' : ''} />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description} onChange={e => onChange(e)}
            className='text-black'
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </div>
  )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddExperience)