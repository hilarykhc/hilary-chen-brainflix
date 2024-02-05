import "./UploadPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function UploadPage() {
  const notify = () => toast("Your upload was successful.");

  const navigate = useNavigate();
  const fileInputRef = useRef();

  const uploadVideo = async (title, description) => {
    const newVideo = {
      title: title,
      description: description,
    };

    try {
      const { data } = await axios.post(
        `${REACT_APP_SERVER_URL}/videos`,
        newVideo
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formRef = useRef();

  function handleVideoSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    const title = form.title.value;
    const description = form.description.value;

    if (title === "" || description === "") {
      alert("Please complete the form");
      return;
    }

    uploadVideo(title, description);
    form.reset();
    notify();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="upload">
      <div className="upload__container">
        <h1 className="upload__title">Upload Video</h1>
        <form
          className="upload__form"
          ref={formRef}
          onSubmit={handleVideoSubmit}
        >
          <div className="upload__form-title">
            <p className="upload__form-thumbnail">VIDEO THUMBNAIL</p>
            <img
              className="upload__form-image"
              alt="upload thumbnail"
              src={`${REACT_APP_SERVER_URL}/images/Upload-video-preview.jpg`}
            ></img>
          </div>
          <div className="upload__form-content">
            <label className="upload__form-subtitle" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              className="upload__form-subtitle-input"
              name="title"
              id="title"
              placeholder="Add a title to your video"
            ></input>
            <label className="upload__form-subtitle" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              type="text"
              className="upload__form-subtitle-description"
              name="description"
              id="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </form>
        <div className="upload__buttons">
          <button
            type="submit"
            onClick={(event) => handleVideoSubmit(event)}
            className="upload__button-publish"
          >
            PUBLISH
          </button>

          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
          />

          <Link to="/" className="upload__button-cancel-link">
            <p className="upload__button-cancel">CANCEL</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
