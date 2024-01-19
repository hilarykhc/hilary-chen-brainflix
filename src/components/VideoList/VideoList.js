import "./VideoList.scss";
import videoData from "../../data/videos.json";

export default function VideoList() {
  //   const targetVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  //   const selectedVideo = videoData.filter((video) => video.id === targetVideoId);

  //   if (selectedVideo.length === 0) {
  //     return <div>Video loading...</div>;
  //   }

  return (
    <section className="videoList">
      <p className="videoList__title">NEXT VIDEOS</p>
      <div className="videoList__wrapper">
        {videoData.map((video) => (
          <>VideoCard</>
          //   <div key={video.id} className="videoList__wrapper-item">
          //     <a href="#">
          //       <div>
          //         <img
          //           src={video.image}
          //           alt={video.title}
          //           className="videoList__wrapper-item-img"
          //         />
          //       </div>
          //       <div className="videoList__wrapper-item-info">
          //         <p className="videoList__wrapper-item-info-title">
          //           {video.title}
          //         </p>
          //         <p className="videoList__wrapper-item-info-channel">
          //           {video.channel}
          //         </p>
          //       </div>
          //     </a>
          //   </div>
        ))}
      </div>
    </section>
  );
}
