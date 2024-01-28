import "./VideoDetails.scss";
import ViewsIcon from "../../assets/Images/Icons/views.svg";
import LikesIcon from "../../assets/Images/Icons/likes.svg";

export default function VideoDetails({ selectedVideo }) {
  return (
    <section className="videoDetails">
      <h1 className="videoDetails__title">{selectedVideo.title}</h1>
      <div className="videoDetails__info">
        <div className="videoDetails__info-wrapper">
          <p className="videoDetails__info-wrapper-channel">
            By {selectedVideo.channel}
          </p>
          <p className="videoDetails__info-wrapper-date">
            {new Date(selectedVideo.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="videoDetails__info-wrapper">
          <div className="videoDetails__info-wrapper-views">
            <img
              className="videoDetails__info-wrapper-views-img"
              src={ViewsIcon}
              alt="views icon"
            />
            <p>{selectedVideo.views}</p>
          </div>
          <div className="videoDetails__info-wrapper-likes">
            <img
              className="videoDetails__info-wrapper-likes-img"
              src={LikesIcon}
              alt="likes icon"
            />
            <p>{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="videoDetails__description">
        <p>{selectedVideo.description}</p>
      </div>
    </section>
  );
}
