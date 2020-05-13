import React from 'react';
import Title from './title';
import Color from './color';
import style from './style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form" style={style.Form}>
        <Title />
        <Color />
      </div>
    );
  }
}
export default Form;
