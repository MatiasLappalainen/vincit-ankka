import * as React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import * as AsyncRouteComponent from './Components/AsyncRouteComponent';

interface AppState {
  Component: any;
}
interface AppProps {
  host: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      Component: null
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const TextField = AsyncRouteComponent.default(() =>
      import('./Components/FormWrapper')
    );
    this.setState({
      Component: TextField
    });
  }
  render() {
    const { Component } = this.state;
    return (
      <div className="App container">
        <Home host={this.props.host }/>
        {Component !== null ? <Component host={this.props.host} /> : <React.Fragment />}
        <button className="btn btn-danger" onClick={e => this.handleClick(e)}>
          Add Duck
        </button>
      </div>
    );
  }
}

export default App;
