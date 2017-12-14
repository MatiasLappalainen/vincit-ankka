import * as React from 'react';
import './App.css';
import axios from 'axios';
import Tabled from './Components/Table';
import FormWrapper from './Components/FormWrapper';

interface DataTypes {
  id?: string;
  species?: string;
  description?: string;
  dateTime?: string;
  count?: number;
}

interface AppState {
  data: DataTypes[];
  error: string;
}

class App extends React.Component<{}, AppState> {
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

    // Kutsu apia
    axios({
      url: 'http://localhost:3001/sightings',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    // Pistä data state:en
      .then(response => {
        const data = response.data;
        this.setState({
          data,
          error: 'null'
        });
      })
      .catch(error => {
        this.setState({
          data: [],
          error: error
        });
      });

  }

  render() {
    const { data } = this.state;
    return (
      <div className="App container">
        {data.length > 1 ? <Tabled data={this.state.data} /> : <h1>Loading</h1>}
        <FormWrapper />
      </div>
    );
  }
}

export default App;
