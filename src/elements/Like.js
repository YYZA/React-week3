import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";
import { history } from "../redux/configureStore";

function Like(props) {
  const dispatch = useDispatch();
  let is_like = useSelector((state) => state.like.is_like);
  const [like, setLike] = useState(is_like ? true : false);
  const like_list = useSelector((state) => state.like.list);
  const post_id = props.id;
  const post_url = history.location.pathname.split("/")[2];
  const user_id = useSelector((state) => state.user.user.uid);
  useEffect(() => {
    dispatch(likeActions.isLike(false));
    dispatch(likeActions.getLikeFB(post_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  like_list.forEach((val) => {
    if (val.user_id === user_id) {
      dispatch(likeActions.isLike(true));
    }
  });

  if (!post_id) {
    return null;
  }
  const likeClick = () => {
    if (!is_like) {
      dispatch(likeActions.likeFB(post_id, user_id));
      setLike(true);
    } else if (is_like) {
      dispatch(likeActions.unlikeFB(post_id, user_id));
      setLike(false);
    }
  };

  return (
    <>
      {post_url !== undefined ? (
        <IconButton aria-label="add to favorites" onClick={likeClick}>
          {is_like ? (
            <FavoriteIcon style={{ color: "#FFC0CB" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      ) : null}
    </>
  );
}

export default Like;
