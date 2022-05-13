import React from 'react';
import { Formik,Form,Field } from 'formik';
import * as Yup from 'yup'; 

function Register() {
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
        onSubmit = {(values) => {setTimeout(() => {
            console.log(values);
        }, 200);}}
        >
            {
                ({errors,touched}) => (
                    <Form>
                        <Field type="firstName" name="firstName" placeholder="First Name"/>
                        {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                        ) : null}
                        <br />
                        <Field type="lastName" name="lastName" placeholder="Last Name"/>
                        {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                        ) : null}
                        <br />
                        <Field type="email" name="email" placeholder="Email"/>
                        {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                        ) : null}
                        <br />
                        <Field type="password" name="password" placeholder="Password"/>
                        {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                        ) : null}
                        <br />
                        <button type="submit">Submit!</button>
                    </Form>
                )
            }
        </Formik>
    </div> );
}

export default Register;