import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClick: 0,
  };

  handleIncreaseClick = () => {
    console.log("click on item");
    this.setState({ nrOfClick: 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClick}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.value}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/2496/2496733.svg?token=exp=1618938215~hmac=f2a28c5a10666b96b08bcbef0548421d"
          alt="trash can"
        />
        <p>{this.state.nrOfClick}</p>
      </div>
    );
  }
}
