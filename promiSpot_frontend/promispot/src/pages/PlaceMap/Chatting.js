import { useState } from 'react';
import SockJS from 'sockjs-client';
const Stomp = require('@stomp/stompjs')

export default function Chatting() {
  const [chatData, setChatData] = useState({
    roomId: '',
    room: {},
    sender: '',
    message: '',
    messages: []
  })
  const sock = new SockJS('/api/ws/chat')
  const sw = Stomp.over(sock)
  const reconnect = 0


  return (
    <div>
      <h1>Chatting</h1>
    </div>
  )
}