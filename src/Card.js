import React, { Component } from 'react';
import './Card.scss';
import bgPattern from './images/bg-pattern-desktop.svg';
import bgWoman from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import Accordion from './Accordion';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    question: "How many team members can I invite?",
                    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
                },
                {
                    question: "What is the maximum file upload size?",
                    answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
                },
                {
                    question: "How do I reset my password?",
                    answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
                },
                {
                    question: "Can I cancel my subscription?",
                    answer: "Yes! Send us a message and we’ll process your request no questions asked.",
                },
                {
                    question: "Do you provide additional support?",
                    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
                },
            ]
        }
        this.getIndex = this.getIndex.bind(this);
    }

    getIndex(index){
        return index;        
    }

    render(){
        return(
            <div className='Card'>
                <img className='Card-box' src={box} alt="box"/>
                <div className='Card-imgContainer'>
                    <img className='Card-imgContainer__bg-pattern' src={bgPattern} alt="background-pattern"/>
                    <img className='Card-imgContainer__bg-woman' src={bgWoman} alt="bacground-woman"/>
                </div>
                <div className='Card-faq'>
                    <h2 className='Card-faq__title'>FAQ</h2>
                    <div className='Card-faq__questions'>
                        <Accordion questions={this.state.data} ind={this.getIndex}/>                  
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

// <p className='Card-faq__questions-title__sub'>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
// <p className='Card-faq__questions-title__sub'>No more than 2GB. All files in your account must fit your allotted storage space.</p>
// <p className='Card-faq__questions-title__sub'>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
// <p className='Card-faq__questions-title__sub'>Yes! Send us a message and we’ll process your request no questions asked.</p>
// <p className='Card-faq__questions-title__sub'>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>

