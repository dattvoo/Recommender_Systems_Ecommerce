import { Form as AntForm } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(246, 130, 35, 0.9640231092436975) 7%,
    rgba(208, 119, 64, 0.927608543417367) 79%
  );
  text-align: center;
  .link_register {
    display: inline-block;
    margin-bottom: 16px;
    /* transform: translateX(-24px); */
  }
  .btn {
    border-radius: 8px;
  }
  .btn-login {
    background-color: #ad7e43;
  }
  .btn-submit {
    background-color: #851010;
  }
  .ant-form-item .ant-form-item-explain-error {
    color: #5c0203;
  }
  .error_message {
    margin-bottom: 8px;
  }
  .error_message span {
    margin-left: 180px;
    color: #5c0203;
  }
`;

export const WrapForm = styled.div`
  width: 650px;
  /* min-height: 700px; */
  padding-top: 100px;
  margin: 0 auto;
  transform: translateX(-15%);
`;

export const FormStyle = styled(AntForm)`
  /* width: 500px; 
  height: 500px;
  margin: 0 auto;
  padding-top: 40vh; */
`;
export const Heading = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h1 {
    /* color :red; */
    margin-left: 150px;
  }
`;
