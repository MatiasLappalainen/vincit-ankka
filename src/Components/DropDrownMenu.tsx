import * as React from "react";
import axios from 'axios';

import './DropDownStyles.css';

interface DataTypes {
  name?: string;
}

interface DropDownProps {
  text: string;
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
        url: 'http://localhost:3001/species',
        timeout: 2000,
        method: 'get',
        responseType: 'json'
      }).then(res => {
          console.log(res);
        const data = res.data;
        this.setState({
          data,
          error: 'null'
        });
      }).catch(err => {
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
    return (
      <div 
        onMouseOver={() => this.handleHover()}
        onMouseLeave={() => this.handleLeave()}
      >
        <h1 className="btn btn-primary">{this.props.text}</h1>
        <div
          className={active === true ? "drop-active" : "drop-deactive"}
        >
        {data.length > 1 ?
        <ul>
          {data.map((item) => (
              <li>{item.name}</li>
          ))}
        </ul> : <div>loadgin</div>
        }
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
