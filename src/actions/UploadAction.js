// import * as UploadApi from "../api/UploadAPI.js";
// export const uploadImage = (data) => async (dispatch) => {
//   try {
//     console.log("Image upload Action start ");
//     await UploadApi.uploadImage(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const uploadPost = (newpost) => async (dispatch) => {
//   dispatch({ type: "UPLOAD_START" });
//   try {
//     const data = await UploadApi.uploadPost(newpost);
//     dispatch({ type: "UPLOAD_SUCCESS", data: data.data });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "UPLOAD_FAIL" });
//   }
// };

import * as UploadApi from "../api/UploadRequests";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start ho gya hy");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
