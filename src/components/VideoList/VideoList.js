import "./VideoList.scss";
//import videoData from "../../data/videos.json";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList(props) {
  const { videos, selectVideo } = props;

  return (
    <section className="videoList">
      <p className="videoList__title">NEXT VIDEOS</p>
      <div className="videoList__wrapper">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} selectVideo={selectVideo} />
        ))}
      </div>
    </section>
  );
}
