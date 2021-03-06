import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/iamge";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const { history } = props;
  const dispatch = useDispatch();

  const changeContents = (e) => {
    setContents(e.target.value);
  };
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  const [contents, setContents] = React.useState(_post ? _post.contents : "");

  const editPost = () => {
    dispatch(actionCreators.editPostFB(post_id, { contents: contents }));
  };

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트정보없음");
      history.goBack();

      return;
    }
    if (is_edit) {
      dispatch(imageActions.setpreview(_post.image_url));
    }
  }, []);

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
      <Grid
        center
        shadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
        max_width="600px"
        margin="10px auto"
        bg={"#fff"}
      >
        <Grid padding="16px">
          <Text margine="0px" size="36px" bold>
            {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
          <Grid padding="16px" border="2px solid">
            <Upload />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Text margine="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>
          <Grid padding="0px 16px">
            <Image
              shape="rectangle"
              src={preview ? preview : "http://via.placeholder.com/400x300"}
            ></Image>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Input
            value={contents}
            _onChange={changeContents}
            label="강아지 소개"
            placeholder="소개글 작성"
            multiLine
          ></Input>
        </Grid>
        <Grid padding="16px">
          {/* <Button
          _onClick={() => {
            dispatch(actionCreators.addPostFB(contents));
          }}
        >
          게시글 작성
        </Button> */}
          {is_edit ? (
            <Button _onClick={editPost}>게시글 수정</Button>
          ) : (
            <Button
              margin="0px"
              _onClick={() => {
                dispatch(actionCreators.addPostFB(contents));
              }}
            >
              게시글 작성
            </Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
