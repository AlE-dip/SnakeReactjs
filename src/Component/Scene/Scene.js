import React from "react";
import "./Scene.css";

export default class Scene extends React.Component {
  direction = "right";
  position = 0;
  one = false;
  width = 70;
  state = {
    data: Array.from({ length: 3010 }, (_, i) =>
      this.position === i ? (
        <div className="position-snake"></div>
      ) : (
        <div className="grid-item"></div>
      )
    ),
  };

  run = () => {
    setTimeout(() => {
      // this.position++;
      this.setPosition["left"]();
      this.setState({
        data: Array.from({ length: 3010 }, (_, i) =>
          this.position === i ? (
            <div className="position-snake"></div>
          ) : (
            <div className="grid-item"></div>
          )
        ),
      });
    }, 10);
  };

  setPosition = {
    right: () => {
      let line = parseInt(this.position / this.width);
      let lineAf = parseInt((this.position + 1) / this.width);
      lineAf > line ? (this.position = line * this.width) : this.position++;
    },
    left: () => {
      let line = parseInt(this.position / this.width);
      let lineAf = parseInt((this.position - 1) / this.width);
      lineAf < line ? (this.position = line * this.width + this.width) : this.position--;
    }
  };

  componentDidMount() {
    if (!this.one) {
      this.run();
      this.one = true;
    }
  }
  componentDidUpdate() {
    this.run();
  }

  render() {
    return (
      <div className="contain">
        <div className="section">
          <div>Line: 10</div>
          <div>Score: 100</div>
        </div>
        <div className="section">
          <div className="grid">{this.state.data}</div>
        </div>
      </div>
    );
  }
}
