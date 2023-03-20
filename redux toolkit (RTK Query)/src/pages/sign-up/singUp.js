import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useSignUpRequestMutation } from "../../API/authApi";
import { SubmitButton } from '../../components/submitButton';
import { useSelector } from "react-redux";
import { LoggedInUsers } from "../../components/content-to-logged-in-users/loginContent";
import Loading from "../../components/loading/loading";
import checkLoginStatus from "../../features/auth-features/checkLoginStatus";


export const SignUP = () => {
    const [signUpRequest, { data, isError, error }] = useSignUpRequestMutation();
    const navigate = useNavigate();
    const loginStatus = useSelector(store => store.loginStatus);
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    // check user login status
    useEffect(() => {
        if (loginStatus.token) {
            setIsUserLogin(true);
        }
        setLoading(false);
    }, [loginStatus]);

    useEffect(() => {
        if (data) {
            toast.success('SignUp successful', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login");
        } else if (isError) {
            toast.error(error.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [data, isError]);

    // needs for manage input Errors
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validate = (values) => {
        const errors = {};

        // firstName validation
        if (!values.firstName) {
            setFirstNameError(true);
            errors.firstName = "required";
        } else {
            setFirstNameError(false);
        }

        // lastName validation
        if (!values.lastName) {
            setLastNameError(true);
            errors.lastName = "required";
        } else {
            setLastNameError(false);
        }

        // email validation
        if (!values.email) {
            setEmailError(true);
            errors.email = "";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address!';
        }
        else {
            setEmailError(false);
        }

        // password validation
        if (!values.password) {
            setPasswordError(true);
            errors.password = "required";
        } else {
            setPasswordError(false);
        }

        return errors;
    };

    // validating form using formik library
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            password: "",
            password: "",
            email: ""
        },
        validate,
        onSubmit: values => {
            const firstName = values.firstName;
            const lastName = values.lastName;
            const email = values.email;
            const password = values.password;
            signUpRequest({ firstName, lastName, email, password });
        }
    });

    // showing toast error on submit button
    const toastInputErrors = () => {
        if (firstNameError) {
            toast.error("First name is required!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (lastNameError) {
            toast.error("Last name is required!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (emailError) {
            toast.error("Email is required!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (passwordError) {
            toast.error("Password is required!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const itemsToShow = () => {
        if (loading) {
            return <Loading />;
        } else if (isUserLogin) {
            return <LoggedInUsers />;
        } else {
            return (
                <div>
                    {/* Section: Design Block */}
                    <section className="background-radial-gradient overflow-hidden">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
                            }}
                        />
                        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5" style={{ height: "100vh" }}>
                            <div className="row gx-lg-5 align-items-center my-5">
                                <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                                    <h1
                                        className="my-5 display-5 fw-bold ls-tight"
                                        style={{ color: "hsl(218, 81%, 95%)" }}
                                    >
                                        The best offer <br />
                                        <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                            for your business
                                        </span>
                                    </h1>
                                    <p
                                        className="mb-4 opacity-70"
                                        style={{ color: "hsl(218, 81%, 85%)" }}
                                    >
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                        dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
                                        ipsum nisi dolorem modi. Quos?
                                    </p>
                                </div>
                                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                                    <div
                                        id="radius-shape-1"
                                        className="position-absolute rounded-circle shadow-5-strong"
                                    />
                                    <div
                                        id="radius-shape-2"
                                        className="position-absolute shadow-5-strong"
                                    />
                                    <div className="card bg-glass">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <form onSubmit={formik.handleSubmit}>
                                                {/* 2 column grid layout with text inputs for the first and last names */}
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField
                                                                className='w-100'
                                                                label="First name"
                                                                id="firstName"
                                                                size="small"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.firstName}
                                                                error={firstNameError}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField
                                                                className='w-100'
                                                                label="Last name"
                                                                id="lastName"
                                                                size="small"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.lastName}
                                                                error={lastNameError}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Email input */}
                                                <div className="form-outline mb-4">
                                                    <TextField
                                                        className='w-100'
                                                        label="Email"
                                                        id="email"
                                                        placeholder='Your email'
                                                        size="small"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                        error={emailError}
                                                    />
                                                    {formik.errors.email ? <p className="text-danger">{formik.errors.email}</p> : null}
                                                </div>
                                                {/* Password input */}
                                                <div className="form-outline mb-4">
                                                    <TextField
                                                        className='w-100'
                                                        label="Password"
                                                        id="password"
                                                        placeholder='Your password'
                                                        size="small"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.password}
                                                        error={passwordError}
                                                    />
                                                </div>
                                                {/* Checkbox */}
                                                <div className="form-check d-flex justify-content-center mb-4">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="form2Example33"
                                                        defaultChecked=""
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example33">
                                                        Subscribe to our newsletter
                                                    </label>
                                                </div>
                                                {/* Submit button */}
                                                <SubmitButton
                                                    loading={loading}
                                                    customClassName="w-100 mb-4"
                                                    buttonText="Sign up"
                                                    onClick={toastInputErrors}
                                                />
                                                {/* login buttons */}
                                                <div className="text-center d-flex justify-content-center align-items-center ">
                                                    <p className="px-2">Do you have an account?</p>
                                                    <Link to="/login">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-block mb-4 px-2 gradient-custom-2 border-none btn-outline-none"
                                                        >
                                                            Login
                                                        </button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section: Design Block */}
                </div>

            );
        }
    };

    return (itemsToShow());
};