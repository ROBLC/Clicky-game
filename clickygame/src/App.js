import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">

          <div className="jumbotron">
            <h1>Your Project</h1>
            <p>
              Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna
              exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
              Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation
              nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu
              deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
        </p>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Non eu sit duis adipisicing esse incididunt ad proident.</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex
                mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
                adipisicing.Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo
                magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
                adipisicing.
          </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
