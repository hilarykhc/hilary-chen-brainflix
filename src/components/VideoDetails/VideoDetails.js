import "./VideoDetails.scss";
import { useState } from "react";
import videoDetailsData from "../../data/video-details.json";
import ViewsIcon from "../../assets/Images/Icons/views.svg";
import LikesIcon from "../../assets/Images/Icons/likes.svg";

export default function VideoDetails() {
  const targetVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const selectedVideo = videoDetailsData.find(
    (video) => video.id === targetVideoId
  );

  if (!selectedVideo) {
    return <div>Just a moment...</div>;
  }
  return (
    <div>
      <section class="videoDetails">
        <h1 class="videoDetails__title">{selectedVideo.title}</h1>
        <div class="videoDetails__info">
          <div class="videoDetails__info-wrapper">
            <p class="videoDetails__info-wrapper-channel">
              By {selectedVideo.channel}
            </p>
            <p class="videoDetails__info-wrapper-date">
              {selectedVideo.timestamp}
            </p>
          </div>
          <div class="videoDetails__info-wrapper">
            <div class="videoDetails__info-wrapper-views">
              <img
                className="videoDetails__info-wrapper-views-img"
                src={ViewsIcon}
                alt="views icon"
              />
              <p>{selectedVideo.views}</p>
            </div>
            <div class="videoDetails__info-wrapper-likes">
              <img
                className="videoDetails__info-wrapper-likes-img"
                src={LikesIcon}
                alt="likes icon"
              />
              <p>{selectedVideo.likes}</p>
            </div>
          </div>
        </div>
        <div class="videoDetails__description">
          <p>{selectedVideo.description}</p>
        </div>
      </section>
    </div>
  );
}
