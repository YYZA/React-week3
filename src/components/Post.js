import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Image, Text, Button } from "../elements";
import Like from "../elements/Like";
import { history } from "../redux/configureStore";
import { actionCreators } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <React.Fragment>
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={(e) => {
                    e.stopPropagation();
                    history.push(`/write/${props.id}`);
                  }}
                >
                  수정
                </Button>
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={(e) => {
                    e.stopPropagation();
                    dispatch(actionCreators.deletePostFB(props.id));
                  }}
                >
                  삭제
                </Button>
                <Like {...props}></Like>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "YYZAS",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLc5575T1swxAbDt7dVBzEaMVSdYhULaamw&usqp=CAU",
  },
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLc5575T1swxAbDt7dVBzEaMVSdYhULaamw&usqp=CAU",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
