import "./VideoCard.scss";
//import videoData from "../../data/videos.json";

export default function VideoCard({ video }) {
  return (
    <div key={video.id} className="videoList__wrapper-card">
      <article className="videoList__wrapper-card2">
        <div>
          <img
            src={video.image}
            alt={video.title}
            className="videoList__wrapper-card-img"
          />
        </div>
        <div className="videoList__wrapper-card-info">
          <p className="videoList__wrapper-card-info-title">{video.title}</p>
          <p className="videoList__wrapper-card-info-channel">
            {video.channel}
          </p>
        </div>
      </article>
    </div>
  );
}
