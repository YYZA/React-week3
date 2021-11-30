import React from "react";
import { Grid, Image, Text } from "../elements";

const Card = (props) => {
  const { Image_url, user_name, post_id } = props;
  return (
    <Grid padding="16px" is_flex bg="#fff" margin="8px 0px">
      <Grid width="auto" margin="0px 8px 0px 0px">
        <Image size={85} shape="circle" Image_url={Image_url}></Image>
      </Grid>
      <Grid>
        <Text>
          <b>{user_name}</b>님이 게시글에 댓글을 남겼어요!
        </Text>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  Image_url: "",
  user_name: "",
  post_id: null,
};

export default Card;
