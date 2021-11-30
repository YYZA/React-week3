import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/post";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;
  const dispatch = useDispatch();

  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
    console.log(e.target.value);
  };

  if (!is_login) {
    return (
      <Grid margine="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margine="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text margine="0px" size="24px" bold></Text>
        </Grid>
        <Image shape="rectangle"></Image>
      </Grid>
      <Grid padding="16px">
        <Input
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        ></Input>
      </Grid>
      <Grid padding="16px">
        <Button
          _onClick={() => {
            dispatch(actionCreators.addPsstFB(contents));
          }}
        >
          게시글 작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
