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
    // <Wrapper className="test">
    //   <WrapForm>
    //     <Heading>
    //       <h1>Login Form</h1>
    //     </Heading>

    //     <FormStyle
    //       name="basic"
    //       labelCol={{ span: 8 }}
    //       wrapperCol={{ span: 16 }}
    //       initialValues={{ remember: true }}
    //       onFinish={onFinish}
    //       onFinishFailed={onFinishFailed}
    //     >
    //       <Form.Item
    //         label="Username"
    //         name="username"
    //         required
    //         rules={[{ required: true, message: "Please input your username!" }]}
    //       >
    //         <Input />
    //       </Form.Item>
    //       {error && (
    //         <div className="error_message">
    //           <span>{error}</span>
    //         </div>
    //       )}
    //       <Form.Item
    //         label="Password"
    //         name="password"
    //         rules={[{ required: true, message: "Please input your password!" }]}
    //       >
    //         <Input.Password />
    //       </Form.Item>
    //       <Link href="/register" className="link_register">
    //         Do Not Account? Register Now!
    //       </Link>

    //       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //         <Button type="primary" htmlType="submit" className="btn btn-submit">
    //           LOGIN
    //         </Button>
    //       </Form.Item>
    //       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //         <Button type="primary" className="btn btn-login">
    //           Login as guest
    //         </Button>
    //       </Form.Item>
    //     </FormStyle>
    //   </WrapForm>
    // </Wrapper>
    <></>
  );
};
