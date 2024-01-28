import "./Hero.scss";

export default function Hero({ selectedVideo }) {
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
