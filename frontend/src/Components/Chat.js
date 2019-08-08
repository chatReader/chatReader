import React, { Component } from 'react';
// import axios from 'axios';

class Chat extends Component {
  constructor () {
    super();
    this.state = {
      message: {
        time: Date.now(),
        message: '',
      },
    };
  }
  render() {
    return <div className='chat-container'>Chat</div>;
  }
}
export default Chat;