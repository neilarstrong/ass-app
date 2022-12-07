import air1 from '../assets/img/air1.jpg';
import air2 from '../assets/img/air2.jpg';
import air3 from '../assets/img/air3.jpg';

function Carousel (){
    return(
      <div className="container max-height d-flex align-items-center">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded-5 shadow-4-strong">
    <div className="carousel-item active">
      <img src={air1} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={air2} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={air3} className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Carousel;