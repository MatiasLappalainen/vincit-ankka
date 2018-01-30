import * as React from "react";
import axios from "axios";

import DropDownMenu from "./DropDrownMenu";
import TextField from "./TextField";
import { checkNulls } from './utils/checkForm';
import { apiFormat } from "./utils/time";

import './FormWrapperStyles.css';

interface FormWrapperState {
  description: string;
  count: number;
  species: string;
  formValid: Boolean;
}

interface FormWrapperProps {
  host: string;
}

class FormWrapper extends React.Component<FormWrapperProps, FormWrapperState> {
  constructor(props: FormWrapperProps) {
    super(props);
    this.state = {
      description: "",
      count: 1,
      species: "Select Species",
      formValid: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle Changes on textField
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
  // Send data to checkData function
  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date = new Date();

    const apiDate = apiFormat(date);
    if (checkNulls(this.state.species, this.state.count)  !== false ) {
      this.setState({
        formValid: true
      }
    );
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
          return response;
        })
        .catch(err => {
          this.setState({
            description: "",
            count: 1,
            species: 'Select Species'
          });
          return err;
        });
      } else {
        this.setState({
          formValid: false
        });
      }
  }

  // Get the specie from dropdown menu
  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    const name = e.currentTarget.id;
    this.setState({
      species: name
    });
  }

  render() {
    const { description, count } = this.state;
    return (
      <div className="center"> 
      <form className="form-inline form-positioner">
        <React.Fragment>
          <DropDownMenu
            text={this.state.species}
            handleClick={e => this.handleClick(e)}
            host={this.props.host}
          />
          <TextField
            name="description"
            onChange={this.handleChange}
            variant="form-control"
            value={description}
            type="text"
            placeholder="Description"
          />
          <TextField
            name="count"
            onChange={this.handleChange}
            variant="form-control"
            value={count}
            type="number"
            placeholder="How many ducks"
          />
          <button
            className="btn btn-primary"
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </button>
        </React.Fragment>
      </form>
      {this.state.formValid ? <React.Fragment /> : <div className="error">Form isn't valid</div>}
      </div>
    );
  }
}

export default FormWrapper;
