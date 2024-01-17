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
        <input type="text" class="header__search-input" placeholder="Search" />
        <img src={avatar} alt="Mohan-muruge" class="header__search-avatar" />
        <a class="header__upload-btn upload-btn" href="#">
          UPLOAD
        </a>
      </div>
    </header>

    /*

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

            <button className="search__btn search__btn--tablet" type="submit">
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
          <button className="search__btn" type="submit">
            <img
              src={uploadButton}
              alt="upload icon"
              className="search__btn-icon"
            />
            UPLOAD
          </button>
        </form>

    
      </div>
    </header>

    */
  );
}
