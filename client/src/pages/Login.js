import React, { useContext } from 'react';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
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
       Axios.post('http://localhost:5000/users/login', {username: values.username, password: values.password})
       .then(response => {
        authCtx.login(response.data.token);
        history.push('/profile');
       })
       .catch(error => {
           console.log(error);
       });
     },
   });
   return (
       <Container>
            <form onSubmit={formik.handleSubmit}>

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
        
            <button type="submit">Login</button>
            </form>

            <p>Don't have an account? Register <a href='/register'>here</a></p>
     </Container>
   );
 };

 export default Login;

