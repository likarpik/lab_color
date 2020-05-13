import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Введите цвет</h2>
        <p>(Введите цвет в формате hex с символом &#39;#&#39; или без него)</p>
      </div>
    );
  }
}
export default Title;
