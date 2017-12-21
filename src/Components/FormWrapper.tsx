import * as React from "react";
import * as AsyncRouteComponent from './AsyncRouteComponent';

interface FormWrapperState {
  description: string;
  Component: any;
}

class FormWrapper extends React.Component<{}, FormWrapperState> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      description: '',
      Component: null,
    };
  }

  // Handle Changes on textField
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value: string = target.value;
    const name: any = target.name;
    this.setState({
      [name]: value
    });
  }
  // Load form
  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const TextField = AsyncRouteComponent.default(() => import('./TextField'));
    this.setState({
      Component: TextField
    });
  }
  // Send data to checkData function
  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  render() {
    const {Component} = this.state;
    return (
      <form className="form-inline">
      <button className="btn btn-danger" onClick={(e) => this.handleClick(e)}>Add Duck</button>
        <div>
        {Component !== null ? <Component
          name="description"
          onChange={this.handleChange}
          variant="form-control"
          value={this.state.description}
          type="text"
        /> : <h1>Loading</h1>}
        <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default FormWrapper;
