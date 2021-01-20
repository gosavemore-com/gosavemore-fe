import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { err } = useSelector((state) => state.users);

  const onFinish = (values) => {
    dispatch(loginUser(values, history));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="login-intro">
        <h3>Sign In to GoSaveMore!</h3>
      </div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
        <div className="login-error">
          <p>{err !== undefined ? <p>{err}</p> : null} </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
