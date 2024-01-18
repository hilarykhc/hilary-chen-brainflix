import "./Hero.scss";
import { useState } from "react";
import videoDetails from "../../data/video-details.json";

export default function Hero() {
  const targetVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const selectedVideo = videoDetails.find(
    (video) => video.id === targetVideoId
  );

  if (!selectedVideo) {
    return <div>Wait for it...</div>;
  }
  return (
    <hero className="hero">
      <video
        className="hero__video"
        src={selectedVideo.video}
        controls
        poster={selectedVideo.image}
      ></video>
    </hero>
  );
}

// export default function Hero() {
//     const [selectedVideo, setSelectedVideo] = useState(null);

//     const handleVideoClick = (videoId) => {
//         const newSelectedVideo = videoDetails.find((vdieo) => video.id === videoId);
//         setSelectedVideo(newSelectedVideo);
//     }

//   if (!selectedVideo) {
//     return <div>Wait for it...</div>;
//   }
//   return (
//     <section className="hero">
//       <video
//         className="hero__video"
//         src={selectedVideo.video}
//         controls
//         poster={selectedVideo.image}
//       ></video>
//     </section>
//   );
// }

//------------------------------------------------------------------

// export default function getVideoDetails() {
//   return (
//     <section className="hero">
//       {videoDetails.map((videoDetail, i) => (
//         <video
//           className="hero__video"
//           key={i}
//           src={videoDetail.video}
//           poster={videoDetail.image}
//           controls
//         ></video>
//       ))}
//     </section>
//   );
// }
