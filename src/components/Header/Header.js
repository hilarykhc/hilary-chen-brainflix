import "./Header.scss";
import brainFlixLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src={brainFlixLogo}
          alt="BrainFlix logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__input" placeholder="Search" />
        <img src={avatar} alt="Mohan-muruge" className="header__avatar" />
        <Link to="/upload" className="header__upload-btn upload-btn">
          <p>UPLOAD</p>
        </Link>
      </div>
    </header>
  );
}
