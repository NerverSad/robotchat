// 前端 React 代码

import React, { useState } from 'react';
import axios from 'axios';

function ChatApp() {
  const [userMessage, setUserMessage] = useState('');
  const [botMessage, setBotMessage] = useState('');

  const sendMessage = async () => {
    // 发送用户消息到后端
    const response = await axios.post('http://localhost:3001/sendMessage', { message: userMessage });
    setBotMessage(response.data);
  };

  return (
    <div>
      <div>
        <input type="text" value={userMessage} onChange={e => setUserMessage(e.target.value)} />
        <button onClick={sendMessage}>发送</button>
      </div>
      <div>
        <p>{botMessage}</p>
      </div>
    </div>
  );
}

export default ChatApp;
