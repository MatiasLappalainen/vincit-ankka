import * as React from "react";
import axios from 'axios';

import DropDownMenu from './DropDrownMenu';
import TextField from './TextField';

interface FormWrapperState {
  description: string;
  count: number;
  species: string | undefined;
}

class FormWrapper extends React.Component<{}, FormWrapperState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      description: '',
      count: 1,
      species: undefined
    };
    this.handleChange = this.handleChange.bind(this);    
  }

  // Handle Changes on textField
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    let value: string | number = target.value;
    const name: any = target.name;

    if (name === 'count') {
      value = Number(value);
    }
    this.setState({
      [name]: value
    });
  }
  // Send data to checkData function
  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentTime = new Date();

    const finalDate = currentTime.toISOString().split('.')[0] + 'Z';

    if (Number.isInteger(this.state.count)) {
      axios.post('http://localhost:3001/sightings', {
        dateTime: finalDate,
        description: this.state.description,
        count: this.state.count,
        species: this.state.species
      })
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    }else{
      
    }

  }

  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    const name = e.currentTarget.id;
    console.log(name);
    this.setState({
      species: name
    });

  }

  render() {
    const {description, count} = this.state;
    return (
      <form className="form-inline form-positioner">
        <React.Fragment>
        <DropDownMenu text="Duck Species" handleClick={(e) => this.handleClick(e)}/>
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
        <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </React.Fragment>
      </form>
    );
  }
}

export default FormWrapper;
