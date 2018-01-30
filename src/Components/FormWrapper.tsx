import * as React from "react";

import DropDownMenu from "./DropDrownMenu";
import TextField from "./TextField";

import './FormWrapperStyles.css';


interface FormWrapperProps {
  host: string;
  handleChange(e :React.FormEvent<HTMLInputElement>):  void;
  handleClick(e :React.MouseEvent<HTMLLIElement>):  void;
  handlePost(e :React.MouseEvent<HTMLButtonElement>):  void;
  description: string;
  species: string;
  count: number;
  formValid: Boolean;
}

class FormWrapper extends React.Component<FormWrapperProps, {}> {

  render() {
    return (
      <div className="center"> 
      <form className="form-inline form-positioner">
        <React.Fragment>
          <DropDownMenu
            text={this.props.species}
            handleClick={this.props.handleClick}
            host={this.props.host}
          />
          <TextField
            name="description"
            onChange={this.props.handleChange}
            variant="form-control"
            value={this.props.description}
            type="text"
            placeholder="Description"
          />
          <TextField
            name="count"
            onChange={this.props.handleChange}
            variant="form-control"
            value={this.props.count}
            type="number"
            placeholder="How many ducks"
          />
          <button
            className="btn btn-primary"
            onClick={this.props.handlePost}
          >
            Submit
          </button>
        </React.Fragment>
      </form>
      {this.props.formValid ? <React.Fragment /> : <div className="error">Form isn't valid</div>}
      </div>
    );
  }
}

export default FormWrapper;
