import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  render() {
    return (
      <div className="App">
        <span>
        <button value="on" onClick={this.props.onClick}>On</button>
        </span>
        <span>
        <button value="off" onClick={this.props.onClick}>Off</button>
        </span>
        <br />
        <span>
        <button value="7" onClick={this.props.onClick}>7</button>
        </span>
        <span>
        <button value="8" onClick={this.props.onClick}>8</button>
        </span>
        <span>
        <button value="9" onClick={this.props.onClick}>9</button>
        </span>
        <span>
        <button value="+" onClick={this.props.onClick}>+</button>
        </span>
        <br />
        <span>
        <button value="4" onClick={this.props.onClick}>4</button>
        </span>
        <span>
        <button value="5" onClick={this.props.onClick}>5</button>
        </span>
        <span>
        <button value="6" onClick={this.props.onClick}>6</button>
        </span>
        <span>
        <button value="-" onClick={this.props.onClick}>-</button>
        </span>
        <br />
        <span>
        <button value="1" onClick={this.props.onClick}>1</button>
        </span>
        <span>
        <button value="2" onClick={this.props.onClick}>2</button>
        </span>
        <span>
        <button value="3" onClick={this.props.onClick}>3</button>
        </span>
        <span>
        <button value="*" onClick={this.props.onClick}>*</button>
        </span>
        <br />
        <span>
        <button value="0" onClick={this.props.onClick}>0</button>
        </span>
        <span>
        <button value="." onClick={this.props.onClick}>.</button>
        </span>
        <span>
        <button value="=" onClick={this.props.onClick}>=</button>
        </span>
        <span>
        <button value="÷" onClick={this.props.onClick}>÷</button>
        </span>
      </div>
    );
  }
}

export default Button;
