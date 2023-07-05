import * as UploadApi from "../api/UploadAPI.js";
export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start ");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error.message);
  }
};
