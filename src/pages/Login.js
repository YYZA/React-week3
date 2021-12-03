import React from "react";
import { useDispatch } from "react-redux";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    console.log(id);

    if (id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };
  return (
    <React.Fragment>
      <Grid
        center
        bg={"#EFF6FF"}
        max_width="600px"
        margin="200px auto"
        shadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      >
        <Grid padding="16px">
          <Text size="32px" bold>
            로그인
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
              label="패스워드"
              placeholder="패스워드 입력해주세요."
              type="password"
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>
          <Grid padding="20px 200px">
            <Button
              text="로그인하기"
              _onClick={() => {
                login();
                console.log("로그인 했어!");
              }}
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
