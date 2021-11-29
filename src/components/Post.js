import React from "react";

import { Grid, Image, Text } from "../elements";

function Post(props) {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>{props.comment_cnt}개</Text>
        </Grid>

        <div>user profile / user name/ insert_dt</div>
        <div>contents</div>
        <div>image</div>
        <div>comment cnt</div>
      </Grid>
    </React.Fragment>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: "yong",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz0__7lDZ7ZfuEADaPqG0VR2MtB860Y9maQ&usqp=CAU",
  },
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz0__7lDZ7ZfuEADaPqG0VR2MtB860Y9maQ&usqp=CAU",
  contents: "강아지네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;
