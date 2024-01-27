import Hero from "../../components/Hero/Hero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  //   const { videos, selectedVideo, handleSelectVideo } = props;
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const { videoId = "" } = useParams();

  const baseUrl = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "2bd1529e-9731-4ea5-974c-934934bdc239";

  const searchSingleVideo = (videoId) =>
    `${baseUrl}/${videoId}?api_key=${apiKey}`;

  // videoId to find selected video
  const selectedVideoFromParams = videos.find((video) => video.id === videoId);

  // if videoId not found
  const currentSelectedVideo = selectedVideoFromParams || selectedVideo;

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo?.id
  );

  // unwrapping useEffect
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${baseUrl}?api_key=${apiKey}`);
      setVideos(response.data);
      if (!videoId && response.data.length > 0) {
        fetchSingleVideo(response.data[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchSingleVideo = async (videoId) => {
    try {
      const response = await axios.get(
        `${baseUrl}/${videoId}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchSingleVideo(videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"); // pass id for default.
    }
  }, [videoId]);

  //

  // commenting out lines 66 to 105 -----------------------------------------
  // get all videos
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}?api_key=${apiKey}`);
  //       setVideos(response.data);

  //       //set default
  //       setSelectedVideo(response.data[0]);
  //       // console.log(response.data[0]);
  //     } catch (error) {
  //       console.error("error fetching videos", error);
  //     }
  //   };

  //   fetchVideos();
  // }, []);

  // //get single video
  // useEffect(() => {
  //   const fetchSingleVideo = async () => {
  //     if (selectedVideo) {
  //       // const searchSingleVideo = (videoId) =>
  //       //   `${baseUrl}/${videoId}?api_key=${apiKey}`;
  //       try {
  //         if (selectedVideo && selectedVideo.id) {
  //           // if (selectedVideo.id) {
  //           const { data } = await axios.get(
  //             searchSingleVideo(selectedVideo.id)
  //           );
  //           setSelectedVideo(data);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchSingleVideo();
  //   //   }, [currentSelectedVideo.id]);
  // }, [videos, videoId]);

  // commenting out lines 66 to 105 -----------------------------------------

  const handleSelectVideo = (clickedId) => {
    const foundVideo = videos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  // videoId to find selected video
  //   const selectedVideoFromParams = videos.find((video) => video.id === videoId);

  //   // if videoId not found
  //   const currentSelectedVideo = selectedVideoFromParams || selectedVideo;

  //   const filteredVideos = videos.filter(
  //     (video) => video.id !== currentSelectedVideo?.id
  //   );

  return (
    <div>
      <Hero selectedVideo={currentSelectedVideo} />
      <div className="div-container">
        <div className="div-container2">
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo.comments} />
        </div>
        <div className="div-container3">
          <VideoList videos={videos} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}
