import * as React from 'react';
import Home from './Components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {
  host: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="App container">
        <Home host={this.props.host}/>
      </div>
    );
  }
}

export default App;
