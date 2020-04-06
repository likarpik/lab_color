import React from 'react';

class Title extends React.Component {
    render() {
        return(
            <div>
                <h2>Введите цвет</h2>
                <p>(Введите цвет в формате hex с символом '#' или без него)</p>
            </div>
        );
    }
}
export default Title;