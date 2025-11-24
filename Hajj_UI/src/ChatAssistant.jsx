import React, { useState } from 'react';
import chatIcon from '../public/icons/chat.svg';

function ChatAssistant({ lang }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="flex-1 border p-4 rounded-lg bg-desert-muted">
      <h2 className="flex items-center gap-2 mb-4 text-desert-dark">
        <img src={chatIcon} className="w-6 h-6" /> 
        {lang === 'ar' ? 'مساعد الدردشة' : 'Chat Assistant'}
      </h2>
      <div className="h-64 overflow-y-auto mb-2 p-2 bg-white rounded">
        {messages.map((m, i) => (
          <div key={i} className={`my-1 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder={lang === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
        />
        <button onClick={sendMessage} className="bg-desert-dark text-white px-4 rounded">
          {lang === 'ar' ? 'إرسال' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;
