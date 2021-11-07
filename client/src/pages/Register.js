import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import AuthContext from '../store/auth-context';

 const validate = values => {
   const errors = {};

   if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
    if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if (!values.username) {
       errors.username = 'Required';
   } else if (values.username.length < 5 || values.username.length > 15) {
       errors.username = 'Username must be between 5 and 15 characters long';
   }

   if (!values.password) {
       errors.password = 'Required';
   } else if (values.password.length < 8) {
       errors.password = 'Password must be at least 8 characters long'
   } else if (values.password.length > 30) {
        errors.password = 'Password must be less than 30 characters long'
   }

   if (values.password !== values.confirmPassword) {
       errors.confirmPassword = 'Passwords do not match'
   }
 
   return errors;
 };
 
 function Register() {

  const authCtx = useContext(AuthContext);
  const history = useHistory();

   const formik = useFormik({
     initialValues: {
       email: '',
       username: '',
       firstName: '',
       lastName: '',
       password: '',
       confirmPassword: '',
     },
     validate,
     onSubmit: values => {
      Axios.post('http://localhost:5000/users/register', {username: values.username, email: values.email, password: values.password, firstName: values.firstName, lastName: values.lastName })
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
       <Container>
            <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
            />
       {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}

            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
            />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
        
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
            />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
            />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
            />
       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}
        
            <button type="submit">Register</button>
            </form>

            <p>Already have an account? Login <a href='/login'>here</a></p>
     </Container>
   );
 };

 export default Register;
