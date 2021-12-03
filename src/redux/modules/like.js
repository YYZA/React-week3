import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import firebase from "firebase/compat/app";
import { actionCreators as postActions } from "./post";

const IS_LIKE = "IS_LIKE";
const GET_LIKE = "GET_LIKE";

const isLike = createAction(IS_LIKE, (is_like) => ({ is_like }));
const getLike = createAction(GET_LIKE, (post_id, like_list) => ({
  post_id,
  like_list,
}));

const initialState = {
  list: [],
  is_like: false,
};

const likeFB = (post_id, user_id) => {
  return function (dispatch, getState, { history }) {
    const likeDB = firestore.collection("like");
    let _like = {
      post_id: post_id,
      user_id: user_id,
      is_like: true,
    };

    likeDB.add(_like).then((doc) => {
      const postDB = firestore.collection("post");
      const post = getState().post.list.find((val) => val.id === post_id);
      const increment = firebase.firestore.FieldValue.increment(1);
      postDB
        .doc(post_id)
        .update({ like: increment })
        .then((res) => {
          dispatch(
            postActions.editPost(post_id, { like: parseInt(post.like) + 1 })
          );
        });
      dispatch(isLike(true));
    });
  };
};
const unlikeFB = (post_id, user_id) => {
  return function (dispatch, getState, { history }) {
    const likeDB = firestore.collection("like");
    likeDB
      .where("post_id", "==", post_id)
      .get()
      .then((docs) => {
        let likes = [];
        docs.forEach((doc) => {
          likes.push({ ...doc.data(), id: doc.id });
        });
        const user_like = likes.filter((val) => {
          return val.user_id === user_id;
        });

        likeDB
          .doc(user_like[0].id)
          .delete()
          .then((doc) => {
            const postDB = firestore.collection("post");
            const post = getState().post.list.find((val) => val.id === post_id);
            const decrement = firebase.firestore.FieldValue.increment(-1);
            postDB
              .doc(post_id)
              .update({ like: decrement })
              .then((res) => {
                dispatch(
                  postActions.editPost(post_id, {
                    like: parseInt(post.like) - 1,
                  })
                );
              });
            dispatch(isLike(false));
          });
      });
  };
};

const getLikeFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }

    const likeDB = firestore.collection("like");
    likeDB
      .where("post_id", "==", post_id)
      .get()
      .then((docs) => {
        let list = [];
        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        dispatch(getLike(post_id, list));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export default handleActions(
  {
    [IS_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.is_like = action.payload.is_like;
      }),
    [GET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.like_list;
      }),
  },
  initialState
);

const actionCreators = {
  likeFB,
  unlikeFB,
  getLikeFB,
  isLike,
};

export { actionCreators };
