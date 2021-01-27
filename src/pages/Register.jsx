import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userAction";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    dispatch(userRegister(values, history));
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <div className="login">
      <div className="login-intro">
        <h3>Welcome to GoSaveMore</h3>
      </div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="login-button">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </div>
        <div className="login-error">
          {/* <p>{err !== undefined ? <p>{err}</p> : null} </p> */}
        </div>

        {/* <Link to="/forgot" className="link">
          <p className="signup-text">Forgot your password</p>
        </Link>

        <span className="signup">
          New to PatriotsChannel?
          <Link to="/register" className="link">
            <span>Sign Up</span>
          </Link>
        </span> */}
      </Form>
    </div>
  );
};

export default Register;
