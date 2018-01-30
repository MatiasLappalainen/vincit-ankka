import * as React from "react";
import axios from "axios";
import Tabled from "./Table";
import { sortAsc, sortDesc } from "./utils/dateSorting";
/* import { toDateFormat } from './utils/time'; */

interface DataTypes {
  id?: string;
  species?: string;
  description?: string;
  dateTime: Date;
  count?: number;
}

interface AppState {
  data: DataTypes[];
  error: string;
}

interface AppProps {
  host: string;
}

class HomePage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      data: [],
      error: "null"
    };
  }
  componentDidMount() {
    axios({
      url: `http://${this.props.host}:3001/sightings`,
      timeout: 20000,
      method: "get",
      responseType: "json"
    })
      // Pistä data state:en
      .then(response => {
        const data = response.data;
        this.setState({
          data,
          error: "null"
        });
      })
      .catch(error => {
        this.setState({
          data: [],
          error: error
        });
      });
  }

  onClick() {
    const { data } = this.state;
    data.sort(sortAsc);
    this.setState({ data });
  }
  onClickDesc() {
    const { data } = this.state;
    data.sort(sortDesc);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {data.length > 1 ? (
          <Tabled
            data={this.state.data}
            onClickAsc={() => this.onClick()}
            onClickDesc={() => this.onClickDesc()}
          />
        ) : (
          <h1>Loading</h1>
        )}
      </React.Fragment>
    );
  }
}

export default HomePage;
