import "./Comments.scss";
import videoDetailsData from "../../data/video-details.json";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

export default function Comments() {
  return (
    <section class="comments">
      <p class="comments__number">3 Comments</p>
      <div class="comments__input">
        <img src={avatar} alt="user image" class="comments__input-avatar" />
        <form action="#" class="comments__input-form">
          <label for="comments-input" class="comments__input-label">
            JOIN THE CONVERSATION
          </label>
          <div class="comments__input-form-wrapper">
            <textarea
              name="comments"
              id="comments-text"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
              class="comments__input-form-text"
            ></textarea>
            <button class="comments__input-form-btn">COMMENT</button>
          </div>
        </form>
      </div>

      {/* <div class="comments__content">
        <div class="comments__content-wrapper1">
          <div class="comments__content-img"></div>
        </div>
        <div class="comments__content-wrapper2">
          <div class="comments__content-wrapper2-nameDate">
            <p class="comments__content-wrapper2-name">name</p>
            <p class="comments__content-wrapper2-date">date</p>
          </div>
          <p class="comments__content-wrapper2-text">comment text</p>
        </div>
      </div> */}
    </section>
  );
}
