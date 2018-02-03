import * as React from "react";

import { readFormat, readFormatTime } from "./utils/time";

interface DataTypes {
  id?: string;
  species?: string;
  description?: string;
  dateTime: Date;
  count?: number;
}

interface TabledProps {
  data: DataTypes[];
  onClickAsc: () => void;
  onClickDesc: () => void;
}

interface TabledState {
  data: DataTypes[];
}

class Tabled extends React.Component<TabledProps, TabledState> {

  constructor(props: TabledProps) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({data: this.props.data});
  }
  componentWillReceiveProps(nextProps: TabledProps) {
    this.setState({
      data: nextProps.data
    });
  }
  render() {
    const { data } = this.state;
    return (
      <table className="table table-responsive">
        <caption>
          <button className="btn btn-light" onClick={this.props.onClickAsc}>Oldest</button>
          <button className="btn btn-secondary" onClick={this.props.onClickDesc}>Newest</button>
        </caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Species</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.species}</td>
              <td>{item.description}</td>
              <td>{readFormat(item.dateTime)}</td>
              <td>{readFormatTime(item.dateTime)}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tabled;
