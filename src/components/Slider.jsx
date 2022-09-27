import PropTypes from "prop-types";
import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { percent: 0 };

    this.rangeMousemove = this.rangeMousemove.bind(this);
    this.rangeMouseup = this.rangeMouseup.bind(this);
  }

  static getDerivedStateFromProps(props) {
    if (typeof props.value === "number") {
      let value = (props.value / props.max) * 100;

      if (value < props.min) value = props.min;
      else if (value > props.max) value = props.max;

      return { percent: value };
    } else {
      return null;
    }
  }

  updatePercentage(percentage) {
    this.setState({ percent: percentage });
    let value = (percentage * this.props.max) / 100;
    if (this.props.integer) {
      value = parseInt(value);
    }
    this.props.onChange(value);
  }

  rangeMouseup() {
    document.removeEventListener("mousemove", this.rangeMousemove);
    document.removeEventListener("mouseup", this.rangeMouseup);
  }

  rangeMousedown(event) {
    if (!this.props.disabled) {
      event.preventDefault();
      let target = event.target;
      if (
        target.classList.contains("thumb") ||
        target.classList.contains("track-fill") ||
        target.classList.contains("track")
      )
        target = target.parentElement;

      let coordinates = target.getBoundingClientRect();
      let targetX = event.clientX - coordinates.left;
      let percentage = (targetX / coordinates.width) * 100;
      this.updatePercentage(percentage);
      this.target = target;
      document.addEventListener("mousemove", this.rangeMousemove);
      document.addEventListener("mouseup", this.rangeMouseup);
    }
  }

  rangeMousemove(event) {
    event.preventDefault();
    let target = this.target;
    let coordinates = target.getBoundingClientRect();

    if (event.clientX < coordinates.left) {
      this.updatePercentage(0);
      return;
    } else if (event.clientX > coordinates.right) {
      this.updatePercentage(100);
    } else {
      let targetX = event.clientX - coordinates.left;
      this.updatePercentage((targetX / coordinates.width) * 100);
    }
  }

  render() {
    return (
      <div className={this.props.disabled ? "range disabled" : "range"}>
        <div className="inner" onMouseDown={this.rangeMousedown.bind(this)}>
          <div className="track" />
          <div
            className="track-fill"
            style={{ width: this.state.percent + "%" }}
          />
          <div
            className="thumb"
            style={{ left: "calc(" + this.state.percent + "% - 5px)" }}
          />
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  onChange: () => {},
  disabled: false,
  integer: false,
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  integer: PropTypes.bool,
};

export default Slider;
