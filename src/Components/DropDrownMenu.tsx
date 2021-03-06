import * as React from 'react';
import axios from 'axios';

import './DropDownStyles.css';

interface DataTypes {
  name?: string;
}

interface DropDownProps {
  text: string;
  handleClick(e: React.MouseEvent<HTMLLIElement>): void;
  host: string;
}

interface DropDownState {
  active: boolean;
  data: DataTypes[];
  error: string;
}

class DropDownMenu extends React.Component<DropDownProps, DropDownState> {
  constructor(props: DropDownProps) {
    super(props);

    this.state = {
      active: false,
      data: [],
      error: 'null'
    };
  }

  componentDidMount() {
    axios({
      url: `http://${this.props.host}:3001/species`,
      timeout: 2000,
      method: 'get',
      responseType: 'json'
    })
      .then(res => {
        const data = res.data;
        this.setState({
          data,
          error: 'null'
        });
      })
      .catch(err => {
        this.setState({
          data: [],
          error: err
        });
      });
  }
  handleHover() {
    this.setState({
      active: true
    });
  }

  handleLeave() {
    this.setState({
      active: false
    });
  }

  render() {
    const { active, data } = this.state;
    const { text, handleClick } = this.props;
    return (
      <div
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleLeave()}
        className="btn btn-fixed"
      >
        <h1 className="btn btn-primary btn-dropdown">{text}</h1>
        <div id="drop-down" className={active ? 'slide-in' : 'slide-out'}>
          {data.length > 1 ? (
            <ul className="species-ul">
              {data.map(item => (
                <li key={item.name} onClick={handleClick} id={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
