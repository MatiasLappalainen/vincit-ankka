import * as React from 'react';

import './App.css';

import Home from './Components/Home';
import FormWrapper from './Components/FormWrapper';


class App extends React.Component {

  constructor(props: {}) {
    super(props);

    this.state = {
      data: [],
      error: 'null'
    };
  }

  async componentDidMount() {
   /*  const d = new Date();
    const ISO = d.toISOString().split(".")[0] + "Z"; */


  }

  render() {
    return (
      <div className="App container">
        <Home />
        <FormWrapper />
      </div>
    );
  }
}

export default App;
