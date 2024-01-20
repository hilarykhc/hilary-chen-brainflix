import "./VideoList.scss";
//import videoData from "../../data/videos.json";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList(props) {
  const { videos, selectVideo } = props;
  //   const targetVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  //   const selectedVideo = videoData.filter((video) => video.id === targetVideoId);

  //   if (selectedVideo.length === 0) {
  //     return <div>Video loading...</div>;
  //   }

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
