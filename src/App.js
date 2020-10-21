import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  getCard() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    
    .then(data => {
      this.setState({
        card: data[0]
      })
    })
  }

  handleClick(){
    console.log('hi')
    this.getCard()
  }

  render() {
    return (
      <div className="App">
        <QuoteCard card={this.state.card} />
        <button onClick={this.handleClick}>New quote!</button>
      </div>
    );
  }
}

export default App;