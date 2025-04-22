import { ErrorMessage, Field, Form, Formik } from "formik";
import type { FC } from "react";
import React from "react";
import * as Yup from "yup";

interface FormValues {
    email: string;
    password: string | number;
    confirmPassword: string | number;
}

export const RegisterForm: FC = () => {
    const initialValues: FormValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().required("Email must be a valid email"),
    });

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={() => {}} validationSchema={validationSchema}>
                <Form className="mt-5">
                    <Field type="email" name="email" palceholder="Enter your email..."></Field>
                    <ErrorMessage name="email" component="span" className="form-error-message" />

                    <Field type="password" name="password" placeholder="Password"></Field>
                    <ErrorMessage name="password" component="span" className="form-error-message" />

                    <Field type="password" name="confirmpassword" placeholder="Repeat the password..."></Field>
                    <ErrorMessage name="confirmpassword" component="span" className="form-error-message" />
                </Form>
            </Formik>
        </div>
    );
};
