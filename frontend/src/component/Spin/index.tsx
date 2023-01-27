import React from "react";
import { Spin as Spinantd } from "antd";
import { SpinOverlay } from "./style";
export const Spin: React.FC = () => {
  return (
    <div className="spin_overlay">
      <SpinOverlay>
        <Spinantd />
      </SpinOverlay>
    </div>
  );
};
