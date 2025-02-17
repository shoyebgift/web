import React from "react";
import StepperComponent from "./StepperComponent";

const CreateWalletProcess = ({ children }) => {
  return (
    <>
      <StepperComponent />
      {children}
    </>
  );
};

export default CreateWalletProcess;
