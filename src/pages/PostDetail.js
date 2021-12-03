import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Permit from "../shared/Permit";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../redux/modules/post";
import { Grid } from "../elements";

const PostDetail = (props) => {
  const id = props.match.params.id;
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(actionCreators.getOnePostFB(id));
  }, []);

  return (
    <Grid>
      <Grid
        shadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
        max_width="600px"
        margin="10px auto"
        bg={"#fff"}
      >
        {post && (
          <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
        )}
        <Permit>
          <CommentWrite post_id={id} />
        </Permit>
        <CommentList post_id={id} />
      </Grid>
    </Grid>
  );
};

export default PostDetail;
