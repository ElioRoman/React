import React, {Component} from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  pickColor = (text) => {
    this.setState({
      color: text,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.pickColor("Coral")}
            onMouseLeave={() => this.pickColor("")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.pickColor("Aqua")}
            onMouseLeave={() => this.pickColor("")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.pickColor("Bisque")}
            onMouseLeave={() => this.pickColor("")}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;