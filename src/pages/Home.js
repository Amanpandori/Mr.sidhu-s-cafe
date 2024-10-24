import React from "react";
import Carousel from "react-bootstrap/Carousel";
import video from "../images/coffee.mp4";
import "./pages.css";
import img1 from "../images/img1.avif";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import background from "../images/background.webp";
import coffeemaker from "../images/coffeemaker.png";
import grinder from "../images/grinder.png";
import cups from "../images/cups.png";
import machine from "../images/machine.png";
import try1 from "../images/try1.avif";
import try3 from "../images/try3.jpg";
import try4 from "../images/try4.jpg";
import try5 from "../images/try5.jpg";
import all1 from "../images/all1.jpg";
import all2 from "../images/all2.jpg";
import all3 from "../images/all3.avif";
import all4 from "../images/all4.jpg";
import all5 from "../images/all5.jpg";
import all6 from "../images/all6.jpeg";

const Home = () => {
  return (
    <>
      <Carousel
        data-bs-theme="dark"
        style={{ marginTop: "-70px", overflow: "hidden" }}
      >
        <Carousel.Item style={{ maxHeight: "100vh" }}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/cup-coffee-table-front-street-with-city-lights-background_188544-10293.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1729123200&semt=ais_hybrid"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5
              className="caption2"
            >
              WELCOME
            </h5>
            <p
              className="caption1"
            >
              Mr.Sidhu's Cafe
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "100vh" }}>
          <video
            className="d-block w-100"
            src={video}
            autoPlay
            loop
            muted
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5
              className="caption"
            >
              THE HOME OF COFFEE
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="what_here">
        <div className="what_box">
          <img src={img1}></img>
          <div className="what_box box1">
            <div className="box_box">
              <h1 className="what_h1">01</h1>
              <h6>BEAUTIFUL PLACE</h6>
            </div>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei
              est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix atle.
            </p>
          </div>
        </div>
        <div className="what_box">
          <img src={img2}></img>
          <div className="what_box box1">
            <div className="box_box">
              <h1 className="what_h1">02</h1>
              <h6>FEEL THE COFFEE</h6>
            </div>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei
              est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix atle.
            </p>
          </div>
        </div>
        <div className="what_box">
          <img src={img3}></img>
          <div className="what_box box1">
            <div className="box_box">
              <h1 className="what_h1">03</h1>
              <h6>FULL TASTE</h6>
            </div>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei
              est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix atle.
            </p>
          </div>
        </div>
      </div>
      <div className="background">
        <img src={background}></img>
      </div>
      <div className="machines">
        <div className="machine">
          <img src={coffeemaker}></img>
          <div className="machine_box">
            <h4 className="font">COFFEEMAKER</h4>

            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei.
            </p>
          </div>
        </div>
        <div className="machine">
          <img src={grinder}></img>
          <div className="machine_box">
            <h4 className="font">COFFEE GRINDER</h4>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei.
            </p>
          </div>
        </div>
        <div className="machine">
          <img src={cups}></img>
          <div className="machine_box">
            <h4 className="font">COFFEE CUPS</h4>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei.
            </p>
          </div>
        </div>
        <div className="machine">
          <img src={machine}></img>
          <div className="machine_box">
            <h4 className="font">ESPRESSO MACHINE</h4>
            <p>
              Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei.
            </p>
          </div>
        </div>
      </div>
      <div className="place">
        <div className="try">
          <h3 className="try_heading">
            TRY THE BEST COFFEE<br></br> IN THE CITY
          </h3>
          <p className="try_para">
            Alienum phaedrum torquatos nec eu, vis <br></br> detraxit periculis
            ex, nihil expetendis in<br></br> mei.Mei an at dictum lacu pericula
            <br></br> uni euripidis.
          </p>
        </div>
        <div className="moved_pics">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={try1}
                alt="First slide"
                style={{ height: "100%", width: "100%", overflow: "hidden" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={try3}
                alt="First slide"
                style={{ height: "100%", width: "100%", overflow: "hidden" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={try4}
                alt="First slide"
                style={{ height: "100%", width: "100%", overflow: "hidden" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={try5}
                alt="First slide"
                style={{ height: "100%", width: "100%", overflow: "hidden" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <video
                className="d-block w-100"
                src={video}
                autoPlay
                loop
                muted
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="all_pics">
        <div className="pic_box1">
          <img src={all1} alt="pic1" />
        </div>
        <div className="pic_box2">
          <img src={all2} className="pic1" />
          <img src={all3} className="pic1" />
          <img src={all4} className="pic1" />
          <img src={all6} className="pic1" />
        </div>
        <div className="pic_box3">
          <img src={all5} alt="pic1" />
        </div>
      </div>
      <div className="gap"></div>
      
    </>
    
  );
};

export default Home;
