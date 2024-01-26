import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import axios from "axios";
import { useState, useEffect } from "react";
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
// const [videos, setVideos] = useState([]);

// const fetchVideoList = async () => {
//   const baseUrl = "https://project-2-api.herokuapp.com/videos";
//   const apiKey = "2bd1529e-9731-4ea5-974c-934934bdc239";

//   try {
//     const response = await axios.get(`${baseUrl}?api_key=${apiKey}`);
//     setVideos(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   fetchVideoList();
// }, []);

//   return (
//     <section className="videoList">
//       <p className="videoList__title">NEXT VIDEOS</p>
//       <div className="videoList__wrapper">
//         {videos.map((video) => (
//           <Link to={`/videos/${video.id}`} key={video.id}>
//             <VideoCard title={video.title} />
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function VideoList(props) {
//   const { videos, selectVideo } = props;

//   return (
//     <section className="videoList">
//       <p className="videoList__title">NEXT VIDEOS</p>
//       <div className="videoList__wrapper">
//         {videos.map((video) => (
//           <VideoCard key={video.id} video={video} selectVideo={selectVideo} />
//         ))}
//       </div>
//     </section>
//   );
// }
