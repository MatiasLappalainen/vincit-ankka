import * as React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import * as AsyncRouteComponent from './Components/AsyncRouteComponent';

interface AppState {
  Component: any;
  data: any[];
  error: string;
}
class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      data: [],
      error: 'null',
      Component: null,
    };
  }

  async componentDidMount() {
   /*  const d = new Date();
    const ISO = d.toISOString().split(".")[0] + "Z"; */


  }


  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const TextField = AsyncRouteComponent.default(() => import('./Components/FormWrapper'));
  this.setState({
    Component: TextField
  });
}
  render() {
    const { Component } = this.state;
    return (
      <div className="App container">
        <Home />
        {Component !== null ? <Component /> : <React.Fragment />}
        <button className="btn btn-danger" onClick={(e) => this.handleClick(e)}>Add Duck</button>
      </div>
    );
  }
}

export default App;
