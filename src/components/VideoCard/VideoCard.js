import "./VideoCard.scss";

export default function VideoCard(props) {
  const { video, selectVideo } = props;

  return (
    <div
      className="videoList__wrapper-card"
      onClick={() => selectVideo(video.id)}
    >
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
