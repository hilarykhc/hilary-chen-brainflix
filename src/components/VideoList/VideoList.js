import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

export default function VideoList(props) {
  const { videos, selectVideo } = props;

  return (
    <section className="videoList">
      <p className="videoList__title">NEXT VIDEOS</p>
      <div className="videoList__wrapper">
        {videos.map((video) => (
          <Link to={`/videos/${video.id}`} key={video.id}>
            <VideoCard
              video={video}
              selectVideo={selectVideo}
              title={video.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
