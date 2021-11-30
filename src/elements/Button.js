import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const stlyes = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElBtn {...stlyes} onClick={_onClick}>
        {text ? text : children}
      </ElBtn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  margin: false,
  width: "100%",
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  padding: "12px 0px",
};

const ElBtn = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  ${(props) => (props.margin ? `margin :${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #fff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50px;
  vertical-align: middle;
  cursor: pointer;
`;
export default Button;
