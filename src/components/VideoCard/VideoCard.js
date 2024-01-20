import "./VideoCard.scss";
//import videoData from "../../data/videos.json";

export default function VideoCard({ video }) {
  return (
    <div key={video.id} className="videoList__wrapper-item">
      <a href="#">
        <div>
          <img
            src={video.image}
            alt={video.title}
            className="videoList__wrapper-item-img"
          />
        </div>
        <div className="videoList__wrapper-item-info">
          <p className="videoList__wrapper-item-info-title">{video.title}</p>
          <p className="videoList__wrapper-item-info-channel">
            {video.channel}
          </p>
        </div>
      </a>
    </div>
  );
}
