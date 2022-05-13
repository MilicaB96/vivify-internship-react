import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import { useDispatch } from 'react-redux';
import { setUser } from '../store/auth/slice';

function Register() {
    const dispatch = useDispatch();
    const registerSchema = Yup.object().shape({
        firstName: Yup.string().required('Required').min(2,"First Name must be at least two charcters long").max(255,"First Name too long"),
        lastName: Yup.string().required('Required').min(2,"Last Name must be at least two charcters long").max(255,"Last Name too long"),
        email: Yup.string().required('Required').email("Invaild email"),
        password:Yup.string().required('Required').min(2,"Password is too short").matches(/^(?=.{2,})(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=.]).*$/,"Password must have at least one number,uppercase letter and special character"),
    }) 
    return ( <div style={{"padding":"3em"}}>
        <h1>Register: </h1>
        <Formik
        initialValues={
            {firstName: '', lastName: '',email: '',password: ''}
        }
        validationSchema = {registerSchema}
        onSubmit = {(values) => 
            dispatch(setUser(values))
        }
        >
            {
                ({errors,touched}) => (
                    <Form>
                        <Field type="firstName" name="firstName" placeholder="First Name"/>
                        <ErrorMessage name="firstName">{msg=> <div>{msg}</div>}</ErrorMessage>
                        <br />
                        <Field type="lastName" name="lastName" placeholder="Last Name"/>
                        <ErrorMessage name="lastName">{msg=> <div>{msg}</div>}</ErrorMessage>
                        <br />
                        <Field type="email" name="email" placeholder="Email"/>
                        <ErrorMessage name="email">{msg=> <div>{msg}</div>}</ErrorMessage>
                        <br />
                        <Field type="password" name="password" placeholder="Password"/>
                        <ErrorMessage name="password">{msg=> <div>{msg}</div>}</ErrorMessage>
                        <br />
                        <button type="submit">Submit!</button>
                    </Form>
                )
            }
        </Formik>
    </div> );
}
 
export default Register;