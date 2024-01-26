import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import videoDetailsData from "../src/data/video-details.json";
import videoData from "../src/data/videos.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect(() => {
  //   const baseUrl = "https://project-2-api.herokuapp.com/videos";
  //   const apiKey = "2bd1529e-9731-4ea5-974c-934934bdc239";

  //   const fetchVideos = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}?api_key=${apiKey}`);
  //       setVideos(response.data);
  //       console.log(response.data);

  //       //set default video
  //       setSelectedVideo(response.data[0]);
  //     } catch (error) {
  //       console.error("Error fetching videos:", error);
  //     }
  //   };

  //   fetchVideos();
  // }, []);

  // const handleSelectVideo = (clickedId) => {
  //   const foundVideo = videos.find((video) => clickedId === video.id);
  //   setSelectedVideo(foundVideo);
  // };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
            // videos={videos}
            // selectedVideo={selectedVideo}
            // handleSelectVideo={handleSelectVideo}
            />
          }
        />
        <Route path="/videos/:videoId" element={<HomePage />} />
        {/* <Route path="/upload" element={UploadPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// return (
//   <BrowserRouter>
//     <body>
//       <Header />
//       <Routes>
//         <main>
//           <Hero selectedVideo={selectedVideo} />
//           <div className="div-container">
//             <div className="div-container2">
//               <VideoDetails selectedVideo={selectedVideo} />
//               <Comments selectedVideo={selectedVideo} />
//             </div>
//             <div className="div-container3">
//               <VideoList
//                 videos={filteredVideos}
//                 selectVideo={handleSelectVideo}
//               />
//             </div>
//           </div>
//         </main>
//       </Routes>
//     </body>
//   </BrowserRouter>
// );
