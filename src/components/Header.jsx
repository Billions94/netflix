const Header = () => (
  <div className="container-fluid overflow-hidden p-0 pt-3">
    {/*--genres*/}
    <div className="row header sticky-top">
      <h2 className="tv-shows pr-5">TV Shows</h2>
      <div className="genreDiv mt-2">
        <div
          className="btn dropdown-toggle genrebtn text-light"
          href="#"
          role="button"
          id="dropdownGenre"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="d-inline-block  genreSpan mr-3">Genres</span>
        </div>
        <div
          className="dropdown-menu "
          aria-labelledby="dropdownGenre"
        >
          <a className="dropdown-item backgound" href="#">
            Romance
          </a>
          <a className="dropdown-item " href="#">
            Comedy
          </a>
          <a className="dropdown-item " href="#">
            Fantasy
          </a>
        </div>
      </div>
      <div className="ml-auto d-flex  pb-1">
        <div className="border">
          <button className="btn borderbtn text-light">
            <img src="./assets/rows.png" style={{ width: 14 }} />
          </button>
        </div>
        <div className="border">
          <button className="btn borderbtn text-light">
            <img src="./assets/grid.png" style={{ width: 14 }} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
