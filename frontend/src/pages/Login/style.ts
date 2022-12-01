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
`;

export const WrapForm = styled.div`

`;

export const FormStyle = styled(AntForm)`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding-top: 40vh;
`;
