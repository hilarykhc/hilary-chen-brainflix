import Hero from "../../components/Hero/Hero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const { videoId = "" } = useParams();

  const baseUrl = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "2bd1529e-9731-4ea5-974c-934934bdc239";

  // videoId to find selected video
  const selectedVideoFromParams = videos.find((video) => video.id === videoId);

  // if videoId not found
  const currentSelectedVideo = selectedVideoFromParams || selectedVideo;

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo?.id
  );

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${baseUrl}?api_key=${apiKey}`);
        setVideos(response.data);

        const singleVideo = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";
        const singleVideoRes = await axios.get(
          `${baseUrl}/${singleVideo}?api_key=${apiKey}`
        );
        setSelectedVideo(singleVideoRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [videoId]);

  const handleSelectVideo = (clickedId) => {
    const foundVideo = videos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  return (
    <div>
      <Hero selectedVideo={currentSelectedVideo} />
      <div className="div-container">
        <div className="div-container2">
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo.comments} />
        </div>
        <div className="div-container3">
          <VideoList videos={filteredVideos} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}
