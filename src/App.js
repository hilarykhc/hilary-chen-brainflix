import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import videoDetailsData from "../src/data/video-details.json";
import videoData from "../src/data/videos.json";

import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  const handleSelectVideo = (clickedId) => {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);

    setSelectedVideo(foundVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <body>
      <Header />
      <main>
        <Hero selectedVideo={selectedVideo} />
        <div className="div-container">
          <div className="div-container2">
            <VideoDetails selectedVideo={selectedVideo} />
            <Comments selectedVideo={selectedVideo} />
          </div>
          <div className="div-container3">
            <VideoList
              videos={filteredVideos}
              selectVideo={handleSelectVideo}
            />
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
