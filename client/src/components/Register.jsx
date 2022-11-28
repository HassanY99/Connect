import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import Alert from "./Alert";
import {register} from '../actions/auth';

const Register = ({ setAlert, register }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });
// Destructure formData -> instead of using formData.name etc
    const { name, email, password, confirmPass } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value});
    const onSubmit = e => {
        e.preventDefault();

        if(password !== confirmPass) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password })
        }
    }


  return (
    <div>
      
      <div className="bg-grey-lighter min-h-screen flex flex-col background">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
                
                onSubmit={e => onSubmit(e)}>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <Alert />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Full Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                         />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                         />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                         />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Confirm Password"
                        name="confirmPass"
                        value={confirmPass}
                        onChange={e => onChange(e)} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-turq text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the <br />
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="/">
                            Terms of Service
                        </a> and 
                        <br />
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="/">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue ml-1" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>

    </div>
  )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register);
