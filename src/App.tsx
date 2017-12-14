import * as React from 'react';
import './App.css';

/* import FormWrapper from './Components/FormWrapper'; */
import { Home, Form } from './Components/routes';
import { Route } from 'react-router-dom';


class App extends React.Component {

  async componentDidMount() {
   /*  const d = new Date();
    const ISO = d.toISOString().split(".")[0] + "Z"; */
  }

  render() {
    return (
      <div className="App container">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/add" component={Form} />
      </div>
    );
  }
}

export default App;
