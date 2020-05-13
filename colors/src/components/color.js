import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff',
      rgb: '',
    };
  }

  checkHex = (color) => {
    const hexReg = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
    if (hexReg.test(color)) {
      return true;
    }
    return false;
  }

  modifyHex = (color) => {
    if (color.length === 4) {
      color = color.replace('#', '');
    }

    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }

    if (color.length === 7) {
      color = color.replace('#', '');
    }
    return color;
  }

  modifyToHex = (color) => {
    if (color.length === 3 || color.length === 6) {
      color = `#${color}`;
    }
    return color;
  }

  hexToRGB = (color) => {
    const x = [];
    if (color.length !== 6) {
      color = this.modifyHex(color);
    }
    x.push(parseInt(color.slice(0, 2), 16));
    x.push(parseInt(color.slice(2, 4), 16));
    x.push(parseInt(color.slice(4, 6), 16));
    this.setState({
      rgb: `rgb(${x.toString()})`,
    });
    return `rgb(${x.toString()})`;
  }

  changeColor = () => {
    const hex = document.getElementById('choose_color').value;
    if (this.checkHex(hex)) {
      this.setState({
        color: this.modifyToHex(hex),
      });
      this.hexToRGB(hex);
    } else {
      alert('Вы ввели неправильное значение!');
    }
  }

  render() {
    return (
      <div>
        <p>
          <input type="text" id="choose_color" name="choose_color" />
          <button type="submit" onClick={this.changeColor}>Выбрать цвет</button>
        </p>
        <div
          className="color_square"
          style={{
            height: 100,
            width: 500,
            marginLeft: 50,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            backgroundColor: this.state.color,
          }}
        />
        <div
          className="rgb_format"
          style={{
            color: 'black',
          }}
        >
          {this.state.rgb}
        </div>
      </div>
    );
  }
}
export default Color;
