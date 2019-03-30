import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";
import Header from "./Components/Header/Header";
import Img1 from "./images/image1.png";
import Img2 from "./images/image2.png";
import Chart from "./Components/Chart/chart";
import Img3 from "./images/image3.png";
import ContactForm from "./Components/contactForm/ContactForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <img src={Img1} className="responsive-img" alt="" />
        <div
          id="upper-block"
          style={{
            padding: "70px",
            backgroundColor: "#d9d9d9",
            paddingBottom: "20px"
          }}
        >
          <div className="row valign-wrapper">
            <div className="col s6">
              <div
                class="right-align"
                style={{ fontSize: "20px", color: "#1a1a1a" }}
              >
                DeeveFit membership is the fitness benefit your team <br />
                will use.
                <br />
                <br />
                Enhance the employees engagement and track usage <br />
                while your employees stay healthy and motivated.
                <br />
                <br />
                DeeveFit is the best way to connect with your team.
                <br />
                outside the work.
              </div>
            </div>

            <div className="col s6">
              <div style={{ width: "30px", display: "inline-block" }} />
              <img src={Img2} id="img2" alt="" />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "30px" }}>
          <div id="blockquote">
            Effective wellness interventions helps for better employee
            performance at work
          </div>
        </div>
        <div>
          <div
            id="lower-block"
            style={{
              backgroundColor: "#d9d9d9",
              marginTop: "200px",
              paddingBottom: "50px"
            }}
          >
            <div className="container">
              <div className="row valign-wrapper">
                <div className="col s6">
                  <Chart />
                </div>
                <div className="col s6">
                  <h4
                    id="text"
                    style={{ paddingLeft: "50px", fontSize: "40px" }}
                  >
                    <b>
                      Receive
                      <br />
                      Monthly Reports
                    </b>
                  </h4>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row valign-wrapper">
                <div className="col s6">
                  <h4
                    id="text"
                    style={{ paddingLeft: "50px", fontSize: "40px" }}
                  >
                    <b>Easy Integration</b>
                  </h4>
                </div>
                <div className="col s6">
                  <img
                    src={Img3}
                    id="img3"
                    class="z-depth-5 right-align"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-depth-4" style={{ marginTop: "150px" }}>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default App;
