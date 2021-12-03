import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    width,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElTextarea
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          ></ElTextarea>
        ) : (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
          ></ElInput>
        )}
      </Grid>
    </React.Fragment>
  );
};

const ElTextarea = styled.textarea`
  border: 2px solid #212121;
  border-radius: 5px;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

Input.defaultProps = {
  width: "50%",
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 50%;
  padding: 12px 4px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export default Input;
