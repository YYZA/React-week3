import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    max_width,
    wrap,
    shadow,
    border,
    cursor,
  } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    max_width: max_width,
    wrap: wrap,
    shadow: shadow,
    border: border,
    cursor: cursor,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  border: false,
  max_width: false,
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  wrap: false,
  margin: false,
  bg: false,
  center: false,
  shadow: false,
  cursor: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.max_width ? `max-width: ${props.max_width};` : "")}
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow};` : "")}
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items:center; justify-content:space-between;`
      : ""}
  ${(props) => (props.center ? `text-align:center;` : "")}
`;

export default Grid;
