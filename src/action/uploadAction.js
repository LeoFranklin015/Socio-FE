import * as UploadApi from "../api/UploadAPI.js";
export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start ");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadPost = (newpost) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const data = await UploadApi.uploadPost(newpost);
    dispatch({ type: "UPLOAD_SUCCESS", data: data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
