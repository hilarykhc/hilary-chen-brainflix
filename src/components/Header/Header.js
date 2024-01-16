export default function Header() {
  return (
    <header class="header">
      <div class="header__wrapper">
        <a class="header__link" href="#">
          <img class="header__logo" src="#" alt="BrainFlix logo" />
        </a>

        <form class="search">
          <div class="search__wrapper">
            <img src="#" alt="search icon" class="search__icon" />
            <label for="search" class="search__label"></label>
            <input type="text" class="search__input" placeholder="Search" />
          </div>

          <button class="search__upload" type="submit">
            <img src="#" alt="upload icon" class="search__upload-icon" />
            UPLOAD
          </button>

          <div class="search__avatar-wrapper">
            <img src="#" alt="Mohan-muruge" class="search__avatar" />
          </div>
        </form>
      </div>
    </header>
  );
}
