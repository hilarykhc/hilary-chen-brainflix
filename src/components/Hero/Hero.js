import "./Hero.scss";

export default function Hero({ selectedVideo }) {
  // if (!selectedVideo) {
  //   return null;
  // }
  console.log(selectedVideo);

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
