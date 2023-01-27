import styled from "styled-components";

export const SpinOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  .ant-spin-dot-spin {
    position: absolute;
    top: 41%;
    left: 50%;
    font-size: 60px;
  }
`;
