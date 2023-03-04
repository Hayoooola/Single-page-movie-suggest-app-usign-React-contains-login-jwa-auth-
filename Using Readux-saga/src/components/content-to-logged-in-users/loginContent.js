import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/images/hayoola-logo.png";
import { SubmitButton } from '../submitButton';
import logOutRequest from "../../store/actions/auth-actions/logOut";

export const LoggedInUsers = () => {
    const dispatch = useDispatch();

    const userEmail = JSON.parse(localStorage.getItem("email"));
    const submitBtnLoading = useSelector(store => store.loginData.loading);


    const logout = () => {
        dispatch(logOutRequest());
    };

    return (
        <section className="gradient-form d-flex align-items-center" style={{ backgroundColor: "#eee" }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0 justify-content-center">
                                <div className="col-12">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img
                                                src={logo}
                                                style={{ width: 185 }}
                                                alt="logo"
                                            />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Hayoola Team</h4>
                                        </div>
                                        <div>
                                            <p className='text-center'>
                                                Hi <span className='text-primary'>{userEmail}</span>
                                            </p>
                                            <p className='text-secondary fw-light d-flex flex-wrap justify-content-around align-items-center'>you're not {userEmail}?
                                                <SubmitButton
                                                    loading={submitBtnLoading}
                                                    customClassName="btn-outline-none gradient-custom-2"
                                                    buttonText="Log out"
                                                    onClick={logout}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};