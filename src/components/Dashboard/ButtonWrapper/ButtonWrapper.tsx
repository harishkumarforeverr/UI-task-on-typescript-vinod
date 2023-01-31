import { Button } from "antd";
// import React, { useState } from "react";

const ButtonWrapper = (props: any) => {
  // console.log("sjsjsbjsbjsbjjsbss")
  return (
    <>
      <Button {...props}> {props.children}</Button>
    </>
  );
};

export default ButtonWrapper;
