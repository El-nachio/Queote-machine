import React from 'react';
import ReactDOM from 'react-dom';
import quotes from './Quotes';
import $ from 'jquery';
import './index.css';


class Machine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quot: quotes[getRandomArbitrary()],
        };
        this.handleClick = this.handleClick.bind(this);
    };
    randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);
    handleClick() {
            $('#boxe, #root, #new-quote').css('background-color', this.randomColor());
            $('#text, #autor, #buttons').css('color', this.randomColor());
        this.setState({
            quot: quotes[getRandomArbitrary()]
        });
    };
    render() {
        return(
            <div className='boxe'>
                <div id='quote-box'>
                    <div id='text' className='text-center'>
                        "{this.state.quot?.quote || 'Loading'}"
                    </div>
                    <div id='author' className="d-flex justify-content-end">
                        -{this.state.quot?.autor || 'Loading'}
                    </div>
                    <div id='buttons'className="d-flex justify-content-between">
                        <a href="twitter.com/intent/tweet"target="_top" id='tweet-quote'><i className="bi bi-twitter btn btn-primary"></i></a>
                        <button type='button'id='new-quote'
                        className = 'btn btn-success' 
                        onClick={this.handleClick}>
                            refresh
                        </button>
                    </div>
                </div>
            </div>
        )
    };
};
ReactDOM.render(<Machine />, document.getElementById('root'));
//numero aleatorio entre 1-10
function getRandomArbitrary() {
    return Math.round(Math.random() * (11 - 0));
};