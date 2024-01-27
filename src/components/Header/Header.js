import "./Header.scss";
import brainFlixLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <p className="header__link">
          <img
            className="header__logo"
            src={brainFlixLogo}
            alt="BrainFlix logo"
          />
        </p>
      </Link>

      <div className="header__search">
        <input type="text" className="header__input" placeholder="Search" />
        <img src={avatar} alt="Mohan-muruge" className="header__avatar" />
        <a className="header__upload-btn upload-btn" href="#">
          UPLOAD
        </a>
      </div>
    </header>
  );
}
