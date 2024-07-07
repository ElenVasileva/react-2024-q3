import React from "react";

class BadComponent extends React.Component {

  state = { showBadNode: false };

  handleClick = () => {
    this.setState({ showBadNode: true });
  };

  render() {    
    if(this.state.showBadNode)
     throw new Error('Test error');
    return <>
    <button onClick={this.handleClick}>Throw error</button>
    </>;
  }
}

export default BadComponent