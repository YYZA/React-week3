import React from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/post";

const PostList = (props) => {
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(actionCreators.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      {/* <Post /> */}
      {post_list.map((p, idx) => {
        if (p.user_info.user_id === user_info?.uid) {
          return <Post key={p.id} {...p} is_me />;
        } else {
          return <Post key={p.id} {...p} />;
        }
      })}
    </React.Fragment>
  );
};

export default PostList;
