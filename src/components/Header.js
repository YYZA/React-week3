import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  const dispatch = useDispatch();

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px" margin="0px 0px 30px 0px" bg="#fff">
          <Grid width="300px">
            <Text margin="0px 0px 0px 20px" size="24px" bold color="#885A3A">
              μμ πΆ
            </Text>
          </Grid>
          <Grid is_flex max_width="200px" margin="0px 20px 0px 0px">
            <Button
              margin="3px"
              text="λ©μΈνμ΄μ§"
              _onClick={() => {
                history.push("/");
              }}
            ></Button>
            <Button
              margin="3px"
              text="λ‘κ·Έμμ"
              _onClick={() => {
                dispatch(actionCreators.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px" margin="0px 0px 30px 0px" bg="#fff">
        <Grid>
          <Text margin="0px" size="24px" bold>
            μμ!
          </Text>
        </Grid>
        <Grid is_flex max_width="200px">
          <Button
            margin="3px"
            text="λ‘κ·ΈμΈ"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            margin="3px"
            text="νμκ°μ"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
