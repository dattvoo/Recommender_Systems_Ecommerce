import React from "react";
import "./style.css";

interface IProps {
  errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: IProps) => {
  return <p className="errorMessage">{errorMessage}</p>;
};
