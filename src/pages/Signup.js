import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을  모두 입력해주세요!");
      return;
    }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("비밀번호 두가지가 일치하지 않습니다!");
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };
  return (
    <React.Fragment>
      <Grid
        center
        bg={"#EFF6FF"}
        max_width="800px"
        margin="150px auto"
        shadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      >
        <Grid padding="16px">
          <Text size="32px" bold>
            회원가입
          </Text>

          <Grid padding="16px 0px">
            <Input
              label="아이디"
              placeholder="아이디를 입력해주세요."
              _onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Input
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
              _onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              _onChange={(e) => {
                setPwdCheck(e.target.value);
              }}
            />
          </Grid>
          <Grid padding=" 20px 300px">
            <Button text="회원가입하기" _onClick={signup}></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
