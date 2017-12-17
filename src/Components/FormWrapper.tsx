import * as React from "react";
import TextField from "./TextField";

interface FormWrapperState {
  description: string;
}

class FormWrapper extends React.Component<{}, FormWrapperState> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      description: ''
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value: string = target.value;
    const name: any = target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const description = parseInt(this.state.description, 10);
  }

  render() {
    return (
      <form className="form-inline">
        <div>
        <TextField
          name="description"
          onChange={this.handleChange}
          variant="form-control"
          value={this.state.description}
          type="text"
        />
        <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default FormWrapper;
