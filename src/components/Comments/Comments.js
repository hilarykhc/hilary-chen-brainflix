import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import CommentsCard from "../CommentsCard/CommentsCard";
import { CommentsCountContext } from "../../App";
import { useContext } from "react";

export default function Comments({ selectedVideo }) {
  const { commentsCount } = useContext(CommentsCountContext);

  return (
    <section className="comments">
      <p className="comments__number">{`${commentsCount} Comment${
        commentsCount !== 1 ? "s" : ""
      }`}</p>
      <div className="comments__input">
        <img src={avatar} alt="user image" className="comments__input-avatar" />
        <form action="#" className="comments__input-form">
          <label htmlFor="comments-input" className="comments__input-label">
            JOIN THE CONVERSATION
          </label>
          <div className="comments__input-form-wrapper">
            <textarea
              name="comments"
              id="comments-text"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
              className="comments__input-form-text"
            ></textarea>
            <button className="comments__input-form-btn">COMMENT</button>
          </div>
        </form>
      </div>

      <CommentsCard selectedVideo={selectedVideo} />
    </section>
  );
}
