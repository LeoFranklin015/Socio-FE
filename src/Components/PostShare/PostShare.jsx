import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../actions/UploadAction";

import { postcloud, postvideocloud } from "../../api/PostRequests";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [desc, setDesc] = useState("");

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  //handle video change
  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let vid = event.target.files[0];
      setVideo(vid);
    }
  };

  const imageRef = useRef();
  const videoRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(loading);

    //post data
    const newPost = {
      userId: user._id,
      desc: desc,
    };

    // if there is an image with post
    if (image) {
      const formdata = new FormData();
      formdata.append("file", image);
      formdata.append("upload_preset", "user_posts");
      try {
        const response = await postcloud(formdata);
        newPost.image = response.data.url;
        console.log(response.data.url);
      } catch (error) {
        console.log(error);
      }
    }
    if (video) {
      const formdata = new FormData();
      formdata.append("file", video);
      formdata.append("upload_preset", "user_posts");
      try {
        const response = await postvideocloud(formdata);
        newPost.image = response.data.url;
        console.log(response.data.url);
      } catch (error) {
        console.log(error);
      }
    }
    if (image || video || desc) {
      dispatch(uploadPost(newPost));
      resetShare();
    } else {
      alert("Enter a image or video or text to share....");
    }
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setVideo(null);
    setDesc("");
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
          <div style={{ display: "none" }}>
            <input type="file" ref={videoRef} onChange={onVideoChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes
              onClick={() => setImage(null)}
              style={{
                color: "black",
                padding: "2px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
        {video && (
          <div className="previewImage">
            <UilTimes
              onClick={() => setVideo(null)}
              style={{
                color: "red",
                padding: "2px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <img src={URL.createObjectURL(video)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
