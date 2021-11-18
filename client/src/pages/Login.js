import React, { useContext } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

function Login() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      Axios.post('http://localhost:5000/users/login', {
        username: values.username,
        password: values.password,
      })
        .then(response => {
          authCtx.login(response.data.token);
          history.replace('/profile');
        })
        .catch(error => {
          console.log(error);
        });
    },
  });
  return (
    <div className='login'>
      <h2>Login</h2>
      <div className='login-container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='input-container'>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              name='username'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='input-required'>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='input-required'>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='input-container'>
            <button type='submit' className='login-btn'>
              Login
            </button>
          </div>
        </form>

        <p>
          Don't have an account? Register <a href='/register'>here</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
