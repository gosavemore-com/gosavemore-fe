import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { userLogin } from "../redux/actions/userActions";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter a valid email address"),
  password: yup.string().required("Please enter a password"),
});

const Login = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const { loginError } = useSelector((state) => state.user);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }, e) => {
    e.preventDefault();

    // dispatch(userLogin(email, password, history));
  };

  return (
    <div className="login">
      <div className="login-intro">
        <h3>Login to GoSaveMore</h3>
      </div>

      {/* 
          --- OAUTH IMPLEMENTATION ---
        <div className="login-oauth"></div> 
        */}

      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="email" ref={register} name="email" placeholder="Email" />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            ref={register}
            name="password"
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>

          <button type="submit" className="login-email-button">
            Sign In
          </button>
          {/* {loginError ? <p>{loginError.data.message}</p> : null} */}

          <Link to="/forgot" className="link">
            <p className="link-text">Forgot your password</p>
          </Link>

          <span className="signup">
            New to PatriotsChannel?
            <Link to="/register" className="link">
              <span className="link-text"> Sign Up</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
