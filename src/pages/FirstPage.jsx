import "../css/Firstpage.css";
import Microdeft from "../assets/images/microdeft-logo.png";
import HeroSection from "../assets/images/Group.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Card from "../component/card";
import CardImage from "../assets/images/cmdfile.png";
function FirstPage() {
  return (
    <>
      <div className="container">
        <div className="mini-navbar">
          <div className="navbar-location">
            <div>
              <h6>House 14, Block# B, Banasree, Dhaka-1219</h6>
            </div>
            <div>
              <h6>info@Microdeft.com</h6>
            </div>
          </div>
          <div>
            <a href="">
              <img src={Facebook} height="20px" width="20px"></img>
            </a>
            <a href="">
              <img src={Twitter} height="20px" width="20px"></img>
            </a>
            <a href="">
              <img src={Facebook} height="20px" width="20px"></img>
            </a>
          </div>
        </div>

        <div className="navbar">
          <div>
            <img src={Microdeft} alt="" />
          </div>
          <div className="navbar-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Product</a>
            <a href="">Service</a>
            <a href="">Projects</a>
            <a href="">Blogs</a>
            <a href="">Career</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className="heroSection">
          <div className="hero-text">
            <h1>GROW YOUR BUSINESS WITH CUSTOMER WEB DEVELOPMENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              obcaecati?
            </p>
            <button className="hero-button">Learn More</button>
          </div>
          <div className="hero-image">
            <img src={HeroSection} alt="" height="500px" width="602px" />
          </div>
        </div>
        <div className="footer">
          <div>
            <h2>25k+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>25k+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>25k+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>25k+</h2>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="second-page">
          <div className="second-text">
            <h1>
              Our <span>Expertise</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
              dolores.
            </p>
          </div>
          <div className="card-container">
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
            <Card
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, obcaecati?"
              title="CMD BASED WEBSITE"
              imageType={CardImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
