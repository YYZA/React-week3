import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Image, Text, Button } from "../elements";
import Like from "../elements/Like";
import { history } from "../redux/configureStore";
import { actionCreators } from "../redux/modules/post";

const Post = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid width="100%">
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
                  bg="#0655A3"
                  width="auto"
                  padding="4px 6px 4px 4px"
                  margin="4px 4px 4px 10px"
                  _onClick={(e) => {
                    e.stopPropagation();
                    history.push(`/write/${props.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  bg="#E64C3C"
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={(e) => {
                    e.stopPropagation();
                    dispatch(actionCreators.deletePostFB(props.id));
                  }}
                >
                  Delete
                </Button>
                <Like {...props}></Like>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
        <Grid padding="0px 16px" center>
          <Text bold size="36px">
            "My-WaWa!"<Text size="18px">{props.contents}</Text>
          </Text>
        </Grid>
        <Grid padding="0px 16px">
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid is_flex padding="16px">
          <Text margin="0px" bold>
            <span style={{ color: "red", fontSize: "20px" }}>♥</span> 좋아요
            {props.like} 댓글
            {props.comment_cnt}
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
