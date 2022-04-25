import React, { Component } from "react";
import './Accordion.scss';

class Accordion extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: 1
        }
    }


    render(){
        return(
            <div>
                {this.props.questions.map((ques, index) => {
                    return(
                        <div className="Accordion-container">
                            <div className={`Accordion__questions-title ${index === this.state.display ? 'active' : ''}`} onClick={this.handleDisplay = (evt) => {
                                return this.setState({ display: index})}
                            }>
                                <p>{ques.question}</p>
                                <button><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></button>
                            </div>
                            <p className={`Accordion-title__sub ${index === this.state.display ? '' : 'hidden'}`}>{ques.answer}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Accordion;