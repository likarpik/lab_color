import React from 'react';
import Title from "./title";
import Color from "./color";
import style from "./style.css"

class Form extends React.Component {
    render() {
        return(
            <div className = "form" style = {style.Form} >
                <Title />
                <Color />
            </div>       
        );
    }
}
export default Form;