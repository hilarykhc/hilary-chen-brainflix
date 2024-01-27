import { useNavigate } from "react-router-dom";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";

export default function UploadPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your upload was successful!");
    navigate("/");
  };

  return (
    <>
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
            <div className="upload__form-content"></div>
          </form>
          <div className="upload__buttons">
            <button className="upload__button-publish">
              <p className="upload__button-publish-title">PUBLISH</p>
            </button>
            <a className="upload__button-cancel" href="/">
              CANCEL
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
