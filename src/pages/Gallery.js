import {Link} from 'react-router-dom'
import text1 from '../assets/img/text1.png';
import text2 from '../assets/img/text2.png';
import text3 from '../assets/img/text3.png';

function Gallery(){
    return(
            <div className="container-fluid my-5 border py-5">
    <div className="row d-flex flex-column flex-md-row align-items-center">
      <div className="col-6">
        <img id="myimg" src={text1} className="d-block w-100 " alt=""/>
      </div>
      <div className="col-6"><br/>
        <h1 className="display-2">Could the Travis Scott x Air Jordan 1 Low OG "Olive" Be the Best Colourway Yet?</h1>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <p>Travis Scott’s work with Jordan Brand is always eagerly-anticipated by footwear fans across the globe, and
          now we’ve got a first look at his latest collaborative sneaker. Showcasing classNameic colour-blocking, the
          sneaker offers up hits of white, black and olive green for a neat combination that many are hailing as the
          best Travis x AJ1 colourway yet.</p>
        <Link className="card-link btn btn-outline-dark" to="/">Read More</Link>
      </div>
      <br/>
    </div>
    <div className="row d-flex flex-column flex-md-row-reverse align-items-center">
      <div className="col-6">
        <img id="myimg" src={text2} className="d-block w-100" alt=""/>
      </div>
      <div className="col-6"><br/>
        <h1 className="display-2">Air Jordan 1 High OG "Lost & Found" (AKA "Chicago Reimagined")</h1>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <p>Arguably the most anticipated release this year, we’ve now got an on-foot look at the upcoming Air Jordan 1
          High OG “Chicago Reimagined” ahead of a November release date. The sneakers offer up the highly-sought-after
          OG colourway of the AJ1 that consists of red, white and black colour blocking.</p>
        <Link className="card-link btn btn-outline-dark" to="/">Read More</Link>
      </div>
      <br/>
    </div>
    <div className="row d-flex flex-column flex-md-row align-items-center">
      <div className="col-6">
        <img id="myimg" src={text3} className="d-block w-100" alt=""/>
      </div>
      <div className="col-6"><br/>
        <h1 className="display-2">We Can't Believe These High-Heat Kicks Are Still in Stock at size? Right Now!</h1>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <p>Whether you’re big on your gorpcore staples from ACG and Salomon, have been on the hunt for some Air Jordan 1
          or Air Max heat, or you’re looking to jump on the New Balance trend, we’ve rounded up some of the best kicks
          available at the retailer right this second. Hit the links to shop and be sure to tag us in your purchases –
          we can’t wait to see your LPU!</p>
        <Link className="card-link btn btn-outline-dark" to="/">Read More</Link>
      </div>
    </div>
  </div>
      
    )
}

export default Gallery;