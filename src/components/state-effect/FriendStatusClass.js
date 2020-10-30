import React from 'react';

class FriendStatusClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null, friendStatus: 'online' };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    let status;
    if (this.state.friendStatus === 'online') {
      status = true;
    } else {
      status = false;
    }
    this.handleStatusChange(status);
  }

  componentWillUnmount() {
    let status = false;
    this.handleStatusChange(status);
  }

  handleStatusChange(status) {
    this.setState({ isOnline: status });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

export default FriendStatusClass;
