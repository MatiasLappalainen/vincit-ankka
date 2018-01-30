import * as React from "react";
import axios from "axios";
import Tabled from "./Table";
import { sortAsc, sortDesc } from "./utils/dateSorting";
import * as AsyncRouteComponent from "./AsyncRouteComponent";
import { checkNulls } from './utils/checkForm';
import { apiFormat } from "./utils/time";


interface DataTypes {
  id: string;
  species: string;
  description: string;
  dateTime: Date;
  count: number;
}

interface AppState {
  data: DataTypes[];
  error: string;
  TextField: any;
  id?: string;
  species: string;
  description: string;
  dateTime?: Date;
  count: number;
  formValid: Boolean;
  }

interface AppProps {
  host: string;
}

class HomePage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      data: [],
      error: "null",
      TextField: null,
      description: "",
      count: 1,
      species: "Select Species",
      formValid: true
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios({
      url: `http://${this.props.host}:3001/sightings`,
      method: "get",
      responseType: "json"
    })
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
          error: error.error
        });
      });
  }

  onClick() {
    const { data } = this.state;
    data.sort(sortAsc);
    this.setState({ data });
    console.log("watwat")
  }
  onClickDesc() {
    const { data } = this.state;
    data.sort(sortDesc);
    this.setState({ data });
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    let value: string | number = target.value;
    const name: any = target.name;
    // Change count to number since html inputs are stupid
    if (name === "count") {
      value = Number(value);
    }
    this.setState({
      [name]: value
    });
  };

  handlePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date = new Date();

    const apiDate = apiFormat(date);
    if (checkNulls(this.state.species, this.state.count) !== false) {
      this.setState({
        formValid: true
      });
      axios
        .post(`http://${this.props.host}:3001/sightings`, {
          dateTime: apiDate,
          description: this.state.description,
          count: this.state.count,
          species: this.state.species
        })
        .then(response => {
          this.setState({
            description: "",
            count: 1,
            species: "Select Species"
          });
          this.getData();
        })
        .catch(err => {
          this.setState({
            description: "",
            count: 1,
            species: "Select Species"
          });
        });
    } else {
      this.setState({
        formValid: false
      });
    }
  }

  handleClickForm = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.id;
    this.setState({
      species: name
    });
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>)  => {
    e.preventDefault();
    const TextField = AsyncRouteComponent.default(() =>
      import("./FormWrapper")
    );
    this.setState({
      TextField: TextField
    });
  };

  render() {
    const { data, TextField } = this.state;
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
        {TextField !== null ? (
          <TextField
            host={this.props.host}
            handlePost={this.handlePost}
            handleChange={this.handleChange}
            handleClick={this.handleClickForm}
            species={this.state.species}
            description={this.state.description}
            count={this.state.count}
            formValid={this.state.formValid}
          />
        ) : (
          <React.Fragment />
        )}
        <button className="btn btn-danger" onClick={e => this.handleClick(e)}>
          Add Duck
        </button>
      </React.Fragment>
    );
  }
}

export default HomePage;
