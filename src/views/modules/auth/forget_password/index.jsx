import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { recoverPassword } from "../../../../services";

import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Error from "../../../components/alerts/Error.Alert";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const { mutate, isLoading } = useMutation(() => recoverPassword({ email }), {
    retry: false,
    onSuccess: (res) => {
      localStorage.setItem("forgetPasswordEmail", email);
      Success(res?.data?.message);
      navigate("/forget-password/code");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <section className="secsignup py-md-5 py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="finspired_top heading_main text-left mb-md-5 mb-1">
                    <h3 className="h_57 mb-md-3 mb-1">FORGOT PASSWORD</h3>
                    <p className="h_20">Kindly enter your email address to change the password.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <Input
                    type="text"
                    placeholder="Enter Email Address*"
                    value={email}
                    onChange={(email) => setEmail(email)}
                  />
                </div>
                <div className="col-md-12">
                  <div className="button">
                    <Button loading={isLoading} onClick={mutate} className="btn_orange h_22 py-3 px-5">
                      Continue <img src="assets/images/arrow_right_white.png" alt="" />
                    </Button>
                  </div>
                </div>
                <div className="col-md-12">
                  <Link to="/login" className="text-darkblue h_24 mb-3 pl-3">
                    <u>Back To Login</u>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="signup_right">
              <img src="assets/images/forgotpass_img.png" alt="" />
              <div id="forgot-password"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
