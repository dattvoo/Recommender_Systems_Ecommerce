import { Button, Form, Input } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormStyle, Heading, WrapForm, Wrapper } from "./style";
import "./style.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        values
      );
      dispatch({ type: "LOGIN", payload: data });
      Cookies.set("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      // setLoading(false);
      setError(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="wrap-login">
            <div className="login">
              <FormStyle
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  required
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  maxLength={20}
                >
                  <Input />
                </Form.Item>
                {error && (
                  <div className="error_message">
                    <span>{error}</span>
                  </div>
                )}
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                {/* <Link href="/register" className="link_register">
                  Do Not Account? Register Now!
                </Link> */}

                <Form.Item wrapperCol={{ offset: 4, span: 24 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn btn-submit"
                  >
                    LOGIN
                  </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 24 }}>
                  <Button type="primary" className="btn btn-login">
                    Login as guest
                  </Button>
                </Form.Item>
              </FormStyle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
