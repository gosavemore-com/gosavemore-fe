import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { err } = useSelector((state) => state.users);
  const [demoUser, setDemoUser] = useState({
    email: "test@test.com",
    password: "1234",
  });
  const [demoAdmin, setDemoAdmin] = useState({
    email: "admin@test.com",
    password: "1234",
  });

  const onFinish = (values) => {
    dispatch(loginUser(values, history));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const demoUserLogin = () => {
    dispatch(loginUser(demoUser, history));
  };
  const demoAdminLogin = () => {
    dispatch(loginUser(demoAdmin, history));
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div className="login">
      <div className="login-intro">
        <h2>Sign In to GoSaveMore!</h2>
        <Form
          {...layout}
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
          <div className="login-button">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </div>
          <div className="login-error">
            <>{err !== undefined ? <p>{err}</p> : null} </>
          </div>

          <Link to="/forgot" className="link">
            <p className="signup-text">Forgot your password</p>
          </Link>

          <span className="signup">
            New to PatriotsChannel?
            <Link to="/register" className="link">
              <span>Sign Up</span>
            </Link>
          </span>
        </Form>
      </div>

      <div className="loginDemo">
        <h2>Login as DEMO USER</h2>

        <div className="loginDemo-buttons">
          <Button onClick={demoUserLogin}>Demo User</Button>
          <Button onClick={demoAdminLogin}>Demo Admin</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
