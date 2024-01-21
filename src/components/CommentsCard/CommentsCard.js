import "./CommentsCard.scss";

export default function CommentsCard({ selectedVideo }) {
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
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="comments__card-wrapper2-text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
