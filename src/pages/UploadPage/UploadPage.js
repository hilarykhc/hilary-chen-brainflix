// import { useNavigate, Link } from "react-router-dom";
// import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
// import "./UploadPage.scss";
// import axios from "axios";
// import { fetchVideos } from "../../utils";

// export default function UploadPage() {
//   const navigate = useNavigate();

//   const handlePublish = (event) => {
//     event.preventDefault();
//     alert("Your upload was successful!");
//     navigate("/");
//   };

//   const handlePostVideo = async (event) => {
//     event.preventDefault();

//     const title = event.target.title.value;
//     const description = event.target.description.value;
//     const timestamp = Date.now();

//     try {
//       const response = await axios.post(`http://localhost:8080/videos`, {
//         title: title,
//         description: description,
//         timestamp: timestamp,
//       });

//       console.log("Upload is successful!", response.data);

//       fetchVideos(); //-----------
//       event.target.reset();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="upload">
//       <div className="upload__container">
//         <h1 className="upload__title">Upload Video</h1>
//         <form className="upload__form" onSubmit={handlePostVideo}>
//           <div className="upload__form-title">
//             <p className="upload__form-thumbnail">VIDEO THUMBNAIL</p>
//             <img
//               className="upload__form-image"
//               alt="upload thumbnail"
//               src={uploadThumbnail}
//             ></img>
//           </div>
//           <div className="upload__form-content">
//             <label className="upload__form-subtitle" htmlFor="title">
//               TITLE YOUR VIDEO
//             </label>
//             <input
//               className="upload__form-subtitle-input"
//               name="title"
//               id="title"
//               placeholder="Add a title to your video"
//             ></input>
//             <label className="upload__form-subtitle" htmlFor="description">
//               ADD A VIDEO DESCRIPTION
//             </label>
//             <textarea
//               className="upload__form-subtitle-description"
//               name="description"
//               id="description"
//               placeholder="Add a description to your video"
//             ></textarea>
//           </div>
//         </form>
//         <div className="upload__buttons">
//           <button
//             type="submit"
//             onClick={handlePublish}
//             className="upload__button-publish"
//           >
//             PUBLISH
//           </button>
//           <Link to="/" className="upload__button-cancel-link">
//             <p className="upload__button-cancel">CANCEL</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

//--------------------------------------------------------------------formRef

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRef } from "react";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
  const notify = () => toast("Video Uploaded.");

  let navigate = useNavigate();

  const uploadVideo = async (title, description) => {
    const newVideo = {
      title: title,
      description: description,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8080/videos",
        newVideo
      );
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
      alert("Please fill out all form fields");
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
        <form className="upload__form" ref={formRef}>
          {/* <form className="upload__form" onSubmit={handleVideoSubmit} ref={formRef}> */}
          <div className="upload__form-title">
            <p className="upload__form-thumbnail">VIDEO THUMBNAIL</p>
            <img
              className="upload__form-image"
              alt="upload thumbnail"
              src={uploadThumbnail}
            ></img>
          </div>
          <div className="upload__form-content">
            <label className="upload__form-subtitle" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-subtitle-input"
              name="title"
              id="title"
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
          <button
            type="submit"
            // onClick={handlePublish}
            onClick={(event) => handleVideoSubmit(event)}
            className="upload__button-publish"
          >
            PUBLISH
          </button>

          <ToastContainer
            position="top-center"
            autoClose={1500}
            theme="light"
            hideProgressBar={false}
            pauseOnFocusLoss
          />

          <Link to="/" className="upload__button-cancel-link">
            <p className="upload__button-cancel">CANCEL</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
