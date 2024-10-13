import React, { useState } from 'react';
import { MessageSquare, Send, UserCircle2, Stethoscope } from 'lucide-react';

interface Message {
  id: number;
  sender: 'doctor' | 'patient';
  content: string;
  timestamp: Date;
}

const Communication: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        sender: 'doctor',
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleQuickReply = (template: string) => {
    setNewMessage(template);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">实时交流</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="h-96 overflow-y-auto mb-4 border rounded p-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-4 flex items-start">
              {message.sender === 'doctor' ? (
                <Stethoscope size={24} className="text-blue-500 mr-2 mt-1" />
              ) : (
                <UserCircle2 size={24} className="text-green-500 mr-2 mt-1" />
              )}
              <div>
                <p className="font-semibold">{message.sender === 'doctor' ? '医生' : '患者'}</p>
                <p className="bg-gray-100 p-2 rounded">{message.content}</p>
                <p className="text-xs text-gray-500">
                  {message.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow p-2 border rounded"
            placeholder="输入消息..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <Send size={18} className="mr-2" />
            发送
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MessageSquare size={24} className="mr-2" />
          快速回复模板
        </h2>
        <div className="space-y-2">
          <button onClick={() => handleQuickReply("您好，请问最近恢复情况如何？")} className="w-full text-left p-2 bg-gray-100 rounded hover:bg-gray-200">
            您好，请问最近恢复情况如何？
          </button>
          <button onClick={() => handleQuickReply("请记得按时服用药物，并注意休息。")} className="w-full text-left p-2 bg-gray-100 rounded hover:bg-gray-200">
            请记得按时服用药物，并注意休息。
          </button>
          <button onClick={() => handleQuickReply("如有任何不适，请及时联系我们。")} className="w-full text-left p-2 bg-gray-100 rounded hover:bg-gray-200">
            如有任何不适，请及时联系我们。
          </button>
        </div>
      </div>
    </div>
  );
};

export default Communication;