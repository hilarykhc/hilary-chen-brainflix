import { useNavigate, Link } from "react-router-dom";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
  const navigate = useNavigate();

  const handlePublish = (event) => {
    event.preventDefault();
    alert("Your upload was successful!");
    navigate("/");
  };

  return (
    <div className="upload">
      <div className="upload__container">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form">
          <div className="upload__form-title">
            <p className="upload__form-thumbnail">VIDEO THUMBNAIL</p>
            <img
              className="upload__form-image"
              alt="upload thumbnail"
              src={uploadThumbnail}
            ></img>
          </div>
          <div className="upload__form-content">
            <label className="upload__form-subtitle" htmlFor="subtitle">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-subtitle-input"
              name="subtitle"
              id="subtitle"
              placeholder="Add a title to your video"
            ></input>
            <label className="upload__form-subtitle" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__form-subtitle-description"
              name="description"
              id="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </form>
        <div className="upload__buttons">
          <button onClick={handlePublish} className="upload__button-publish">
            PUBLISH
          </button>
          <Link to="/" className="upload__button-cancel-link">
            <p className="upload__button-cancel">CANCEL</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
