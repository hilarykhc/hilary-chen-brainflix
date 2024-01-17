import "./Header.scss";
import brainFlixLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header class="header">
      <a class="header__link" href="#">
        <img class="header__logo" src={brainFlixLogo} alt="BrainFlix logo" />
      </a>

      <div class="header__search">
        <input type="text" class="header__input" placeholder="Search" />
        <img src={avatar} alt="Mohan-muruge" class="header__avatar" />
        <a class="header__upload-btn upload-btn" href="#">
          UPLOAD
        </a>
      </div>
    </header>
  );
}
