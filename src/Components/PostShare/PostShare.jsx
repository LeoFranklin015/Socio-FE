import React, { useState, useRef } from "react";
import "./PostShare.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../action/uploadAction";
import profile from "../../Assets/profile.jpeg";
import photos from "../../Assets/image-gallery.png";
import video from "../../Assets/video.png";
import close from "../../Assets/xmark-solid.svg";
import location from "../../Assets/location.png";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const imageRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user.user._id,
      desc: desc,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="PostShare">
      <img src={profile} alt="" className="profileimg" />
      <div className="text">
        <input
          type="text"
          placeholder="Share about your experience "
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="postOptions">
          <div
            className="option"
            style={{ color: "red" }}
            onClick={() => imageRef.current.click()}
          >
            <img src={photos} alt="" width="25px" />
            Photo
          </div>
          <div className="option">
            <img src={video} alt="" width="25px" />
            Video
          </div>
          <div className="option">
            <img src={location} alt="" width="25px" />
            Location
          </div>
          <button className="share-btn" onClick={handleSubmit}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onChangeImage}
            />
          </div>
        </div>
        {image && (
          <div className="PreviewImage">
            <img
              src={close}
              alt=""
              width="18px"
              onClick={() => setImage(null)}
              className="close"
            />
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="uploadImage"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
