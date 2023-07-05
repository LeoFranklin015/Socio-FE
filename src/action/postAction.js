import * as PostApi from "../api/PostAPI.js";
export const getTimelinePost = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVNG_START" });
  try {
    const { data } = await PostApi.getTimelinePost(id);
    dispatch({ type: "RETREIVNG_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVNG_FAIL" });
  }
};
