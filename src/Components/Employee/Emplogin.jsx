import React from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Emplogin = () => {

    const initialvalue = {
        email: "",
        password: "",
    }
    // const [user, setUser] = useState(initialvalue)

    const onSubmit = (values, props) => {
        console.log(props)
        // console.log(values)

    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required(" Please Enter Email"),
        password: Yup.string().required("enter Password").min(3, "Enter Minimum 3 digit"),
    })
    return (
        <>
            <Grid container>
                <Formik initialValues={initialvalue} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Typography variant="h1" color="initial">sign in </Typography>
                            <Field as={TextField}
                                label="E-mail"
                                // type="email"
                                placeholder="Enter Your Email.."
                                name='email'
                                fullWidth

                                helperText={<ErrorMessage name='email' />}
                            />
                            <Field as={TextField}
                                label="Password"
                                // type="password"
                                placeholder="Enter Your Password.."
                                name='password'
                                fullWidth
                                helperText={<ErrorMessage name='password' />}

                            />
                            <Button type="submit" variant="outlined" color='success'>
                                sign in
                            </Button>
                        </Form>
                    )}
                </Formik>

            </Grid>
        </>
    )
}

export default Emplogin