import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Ajmer", "Alwar", "Bhilwara", "Beawer", "Churu", "Jaipur"],
        datasets: [
          {
            label: "Population",
            data: [617594, 181845, 153460, 105456, 12748, 125948],
            backgorundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153,102, 255, 0.6)",
              "rgba(255, 159, 62, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }
  componentDidMount = () => {
    window.M.AutoInit();
  };

  render() {
    return (
      <div className="z-depth-5">
        <div class="card white darken-1">
          <div class="card-content white-text">
            <button
              className="dropdown-trigger btn white black-text"
              data-target="dateDropdown"
              style={{ position: "absolute", right: 15, top: "10px" }}
            >
              Date
              <i
                className="fas fa-sort-down"
                style={{
                  marginLeft: "10px",
                  position: "relative",
                  bottom: "3px"
                }}
              />
            </button>
            <Line
              data={this.state.chartData}
              option={{
                maintainAspectRation: false
              }}
            />
            <Line data={this.state.chartData} option={{}} />
          </div>
        </div>
        <ul id="dateDropdown" class="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default chart;
