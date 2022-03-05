import React from "react";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import * as  yup from 'yup';
import formik, {useFormik} from "formik";
import {useDispatch} from 'react-redux';
import {registerAction} from "../../module/user/userAction";

const validationSchema = yup.object({
    name: yup.string().required('Username is required'),
    email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password should be of minimum 8 char length'),
});
const Register = () => {
    const  dispatch =useDispatch();
    const registerForm = useFormik({
        validationSchema,
        initialValues: {email: '', password: '', name: ''},
        onSubmit: (values) => {
            dispatch(registerAction(values));
        }
    })
    return <Box>
        <Typography>User Registration</Typography>
        <form autoComplete='off' noValidate onSubmit={registerForm.handleSubmit}>
            <Paper>
                <TextField
                    id="name"
                    name="name"
                    variant="outlined"
                    label="Enter username"
                    value={registerForm.values.name}
                    onChange={registerForm.handleChange}
                    helperText={registerForm.touched.name && registerForm.errors.name}
                    error={registerForm.touched.name && Boolean(registerForm.errors.name)}
                />
                <TextField
                    id="email"
                    name="email"
                    variant="outlined"
                    label="Enter email address"
                    value={registerForm.values.email}
                    onChange={registerForm.handleChange}
                    helperText={registerForm.touched.email && registerForm.errors.email}
                    error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                />
                <TextField
                    id="password"
                    name="password"
                    variant="outlined"
                    label="Enter password"
                    value={registerForm.values.password}
                    onChange={registerForm.handleChange}
                    helperText={registerForm.touched.password && registerForm.errors.password}
                    error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                />
                <Button type='submit'
                        variant='contained'
                        color='primary'>Register
                </Button>
            </Paper>
        </form>
    </Box>
};
export default Register;