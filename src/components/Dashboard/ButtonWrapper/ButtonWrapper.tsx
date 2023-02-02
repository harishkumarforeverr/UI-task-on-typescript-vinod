import { Button } from "antd";
const ButtonWrapper = (props: any) => {
  return (
    <>
      <Button {...props}> {props.children}</Button>
    </>
  );
};

export default ButtonWrapper;
