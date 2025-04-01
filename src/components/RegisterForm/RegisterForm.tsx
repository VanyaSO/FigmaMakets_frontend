import React from "react";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";

interface FormValues {
    email: string;
    password: string | number;
    confirmPassword: string | number;
}

export const RegisterForm: React.FC = () => {
    const initialValues: FormValues = {
        email: "",
        password: "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email must be a valid email")
    });

    return (
        <div>
            <h1 className={styles.name}>Registration</h1>
            <Formik initialValues={initialValues} onSubmit={() => {}} validationSchema={validationSchema}>
                <Form className="mt-5">
                    <Field type="email" name="email" palceholder="Enter your email..."></Field>
                    <ErrorMessage name="email" component="span" className="form-error-message"/>

                    <Field type="password" name="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component="span" className="form-error-message"/>

                    <Field type="password" name="confirmpassword" placeholder="Repeat the password..."></Field>
                    <ErrorMessage name="confirmpassword" component="span" className="form-error-message"/>
                </Form>
            </Formik>
        </div>
    )
}
