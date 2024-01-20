import "./CommentsCard.scss";
//import videoDetailsData from "../../data/video-details.json";

export default function CommentsCard({ selectedVideo }) {
  // const targetVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  // const selectedVideo = videoDetailsData.find(
  //   (video) => video.id === targetVideoId
  // );

  // if (!selectedVideo) {
  //   return <div>Comments loading...</div>;
  // }

  return (
    <div className="comments__container">
      {selectedVideo.comments.map((comment) => (
        <div key={comment.id} className="comments__card">
          <div className="comments__card-wrapper1">
            <div className="comments__card-img"></div>
          </div>
          <div cclassName="comments__card-wrapper2">
            <div className="comments__card-wrapper2-nameDate">
              <p className="comments__card-wrapper2-name">{comment.name}</p>
              <p className="comments__card-wrapper2-date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </div>
            <p className="comments__card-wrapper2-text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
