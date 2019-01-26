import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"
import Footer from "./components/Footer"
import images from "./images.json"

class App extends Component {
  state = {
    count: 0,
    topScore: 0,
    images,
    picks: [],
    message: "Click an image to begin!!"
  };

  ;

  shuffle = () => {
    const characters = this.state.images
    let crnt = characters.length;
    let temp;
    let index;

    while (crnt > 0) {
      index = Math.floor(Math.random() * crnt);
      crnt--;
      temp = characters[crnt];
      characters[crnt] = characters[index];
      characters[index] = temp;
    }
    this.setState({ images })
  }


  handleClick = id => {

    if (!this.state.picks.includes(id)) {
      this.state.picks.push(id);
      this.setState({ count: this.state.count + 1, message: "You picked correctly!" }, () => {
        if (this.state.count > this.state.topScore) {
          this.setState({ topScore: this.state.count }, () => {
            if (this.state.count === 12) {
              this.setState({ count: 0, picks: [] });
            }
          })
        }
      });
      this.shuffle();
    }
    else {

      this.setState({ count: 0, picks: [], message: "You picked wrong!" });
      this.shuffle();
    }

    console.log(this.state.picks)

  }


  render() {
    return (
      <div>
        <Header count={this.state.count} topscore={this.state.topScore} message={this.state.message} />
        <Jumbotron />
        <div className="container">
          <div className="row justify-content-center ">
            {this.state.images.map(character => (
              <Card name={character.name} image={character.image} id={character.id} handleClick={this.handleClick} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
