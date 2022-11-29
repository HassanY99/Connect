import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, Navigate } from 'react-router-dom';
import Alert from '../Alert';
import { useNavigate } from "react-router-dom";


const CreateProfile = ({ createProfile }) => {

    const [formData, setFormData] = useState({
        company: '',
        location: '',
        website: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
});

const [displaySocials, toggleSocials] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      } = formData;

      const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

      const history = useNavigate();

      const onSubmit = e => {
        e.preventDefault();

        createProfile(formData);

        history('/dashbaord');
        history('/dashboard', {replace: true});


      }

  return (
    <div>
    <h1 class="large text-primary">
      Create Your Profile
    </h1>
    <p class="lead">
      <i class="fas fa-user"></i> Let's get some information to make your
      profile stand out
    </p>
    <small>* = required field</small>
    <form class="form" onSubmit={e => onSubmit(e)}>
        <Alert />
      <div class="form-group">
        <select name="status" className='bg-gray' value={status} onChange={e => onChange(e)}>
          <option value="0">* Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <small class="form-text"
          >Give us an idea of where you are at in your career</small
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Company" name="company" className='text-black' value={company} onChange={e => onChange(e)}/>
        <small class="form-text"
          >Could be your own company or one you work for</small
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Website" name="website" className='text-black' value={website} onChange={e => onChange(e)}/>
        <small class="form-text"
          >Could be your own or a company website</small
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Location" name="location" className='text-black' value={location} onChange={e => onChange(e)}/>
        <small class="form-text"
          >City & state suggested (eg. Boston, MA)</small
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="* Skills" className='text-black' name="skills" value={skills} onChange={e => onChange(e)}/>
        <small class="form-text"
          >Please use comma separated values (eg.
          HTML,CSS,JavaScript,PHP)</small
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          className='text-black'
          placeholder="Github Username"
          name="githubusername"
          value={githubusername}
        />
        <small class="form-text"
          >If you want your latest repos and a Github link, include your
          username</small
        >
      </div>
      <div class="form-group">
        <textarea placeholder="A short bio of yourself" className='text-black' name="bio" value={bio} onChange={e => onChange(e)}></textarea>
        <small class="form-text">Tell us a little about yourself</small>
      </div>

      <div class="my-2">
        <button onClick={() => toggleSocials(!displaySocials)} type="button" class="btn btn-primary">
          {displaySocials ? 'Hide Social Network Links' : 'Add Social Network Links'}
        </button>
        <span>Optional</span>
      </div>

      {displaySocials && <div>

        <div class="form-group social-input">
        <i class="fab fa-twitter fa-2x"></i>
        <input type="text" placeholder="Twitter URL" className='text-black' name="twitter" value={twitter} onChange={e => onChange(e)}/>
      </div>

      <div class="form-group social-input">
        <i class="fab fa-facebook fa-2x"></i>
        <input type="text" placeholder="Facebook URL" className='text-black' name="facebook" value={facebook} onChange={e => onChange(e)}/>
      </div>

      <div class="form-group social-input">
        <i class="fab fa-youtube fa-2x"></i>
        <input type="text" placeholder="YouTube URL" className='text-black' name="youtube" value={youtube} onChange={e => onChange(e)}/>
      </div>

      <div class="form-group social-input">
        <i class="fab fa-linkedin fa-2x"></i>
        <input type="text" placeholder="Linkedin URL" className='text-black' name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
      </div>

      <div class="form-group social-input">
        <i class="fab fa-instagram fa-2x"></i>
        <input type="text" placeholder="Instagram URL" className='text-black' name="instagram" value={instagram} onChange={e => onChange(e)}/>
      </div>
      
        </div>}

      
      <input type="submit" class="btn btn-primary my-1" />
      <Link class="btn btn-light my-1" to='/dashboard'>Go Back</Link>
    </form>
    </div>

  )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}

export default connect(null, { createProfile })(CreateProfile)

