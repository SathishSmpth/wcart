import carouselSlideOne from '../images/carouselImage.png';
import carouselSlideTwo from '../images/carouselImage.png';
import carouselSlideThree from '../images/carouselImage.png';

const SectionFour = () => {

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={carouselSlideOne} className="d-block w-100" alt="Img Not Found" />
          <div className="carousel-caption d-none d-md-block">
            <h1>CONSTANT UPGRADES TO THE PLATFROM</h1>
            <p>
              Sustainable eCommerce requires the API-first platform with consistent functional upgrades - headless eCommerce allows users to stay on top with the latest updated version.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={carouselSlideTwo} className="d-block w-100" alt="Img Not Found" />
          <div className="carousel-caption d-none d-md-block">
            <h1>CONSTANT UPGRADES TO THE PLATFROM</h1>
            <p>
              Sustainable eCommerce requires the API-first platform with consistent functional upgrades - headless eCommerce allows users to stay on top with the latest updated version.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carouselSlideThree} className="d-block w-100" alt="Img Not Found" />
          <div className="carousel-caption d-none d-md-block">
            <h1>CONSTANT UPGRADES TO THE PLATFROM</h1>
            <p>
              Sustainable eCommerce requires the API-first platform with consistent functional upgrades - headless eCommerce allows users to stay on top with the latest updated version.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SectionFour;