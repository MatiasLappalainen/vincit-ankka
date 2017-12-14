import * as React from "react";
import TextField from "./TextField";

interface FormWrapperState {
  description: string;
}

class FormWrapper extends React.Component<{}, FormWrapperState> {
  constructor(props: any) {
    super(props);

    this.state = {
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    const value: string = target.value;
    const name: any = target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const description = parseInt(this.state.description, 10);
  }

  render() {
    return (
      <form>
        <TextField
          name="description"
          onChange={this.handleChange.bind(this)}
          value={this.state.description}
          type="text"
        />
        <button onClick={(e) => this.handleClick(e)}>Submit</button>
      </form>
    );
  }
}

export default FormWrapper;
