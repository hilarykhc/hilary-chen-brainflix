import "./Header.scss";
import brainFlixLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Images/Icons/search.svg";
import uploadButton from "../../assets/Images/Icons/upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__link" href="#">
          <img
            className="header__logo"
            src={brainFlixLogo}
            alt="BrainFlix logo"
          />
        </a>

        <form className="search">
          <div className="search__wrapper--mobile">
            <div className="search__wrapper">
              <label htmlFor="search" className="search__label">
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="search__icon"
                />
              </label>
              <input
                id="search"
                type="text"
                className="search__input" //add img as background-img to .search__input
                placeholder="Search"
              />
            </div>

            <button
              className="search__upload search__upload--tablet"
              type="submit"
            >
              <img
                src={uploadButton}
                alt="upload icon"
                className="search__upload-icon"
              />
              UPLOAD
            </button>

            <div className="search__avatar-wrapper">
              <img src={avatar} alt="Mohan-muruge" className="search__avatar" />
            </div>
          </div>
          <button className="search__upload" type="submit">
            <img
              src={uploadButton}
              alt="upload icon"
              className="search__upload-icon"
            />
            UPLOAD
          </button>
        </form>
      </div>
    </header>
  );
}
