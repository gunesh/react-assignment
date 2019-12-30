import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <>
        <div className="header">
          <h1>Flight Search Engine</h1>
        </div>

        <div className="row">
          <div className="col-3 col-s-3 menu">
            <ul>
              <li>
                One Way
                <input
                  placeholder="Enter Origin City"
                  type="text"
                  onChange={this.myChangeHandler}
                />
                <br /> <br />
                <input
                  placeholder="Enter Destination City"
                  type="text"
                  onChange={this.myChangeHandler}
                />
                <br /> <br />
                <input placeholder="Departure Date" type="date" name="d_day" />
                <br /> <br />
                <input placeholder="Return Date" type="date" name="r_day" />
                <br /> <br />
                <select>
                  <option value=""> Passenger </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <br /> <br />
                <button type="button">Search</button>
              </li>
              <li>Refine Flight Serach
              <input type="range" min="1" max="100" value="50" />
              </li>
            </ul>
          </div>

          <div className="col-9 col-s-9">
            <div>
              <Hello name={this.state.name} />
              <p>Start editing to see some magic happen :)</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
