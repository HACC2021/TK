import React from 'react';
 import { useFormik } from 'formik';
 
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
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
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

       <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       {formik.errors.username ? <div>{formik.errors.username}</div> : null}

       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password ? <div>{formik.errors.password}</div> : null}

       <label htmlFor="confirmPassword">Confirm Password</label>
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
       />
       {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default Register;
