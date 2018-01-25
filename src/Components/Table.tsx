import * as React from 'react';

import { readFormat } from './utils/time';

interface DataTypes {
  id?: string;
  species?: string;
  description?: string;
  dateTime?: string;
  count?: number;
}

interface TabledProps {
  data: DataTypes[];
  onClick: () => void
}

interface TabledState {
  data: DataTypes[];
}

class Tabled extends React.Component<TabledProps, TabledState> {
  constructor(props: TabledProps) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const { data } = this.state;
    return (
      <table className="table table-responsive">
        <caption><button onClick={this.props.onClick}>Sort</button></caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Species</th>
            <th scope="col">Description</th>
            <th scope="col">DateTime</th>
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
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tabled;
