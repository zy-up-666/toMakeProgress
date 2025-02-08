// import { useState } from 'react'

import ChatbotIcon from "./components/ChatbotIcon";

function App() {


  return (
    <div className="container" >
      <div className="chatbot-popup" >
        {/* Chatbot  Header */}
        <div className="chatbot-header">
          <div className="chatbot-info">
            <span className="material-symbols-outlined">diversity_1</span>
            {/* <ChatbotIcon /> */}
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot  body */}
        <div className="chatbot-body" data-simplebar>
          <div className="message bot-message">
            {/* 模拟bot发言 */}
            <ChatbotIcon />
            {/* <p className="message-text">一句简短的打招呼</p> */}
            <p className="message-text">
              1.不需要建议，不需要认同，我喜欢她就值得。2.永远真诚，永远简单，生活和我都会发光。3.把自己活成一束光，自信坦荡，光芒万丈。
            </p>
          </div>
          <div className="message user-message">
            {/* 模拟用户发言 */}
            <span className="material-symbols-outlined">self_improvement</span>
            <p className="message-text">
              1.不需要建议，不需要认同，我喜欢她就值得。2.永远真诚，永远简单，生活和我都会发光。3.把自己活成一束光，自信坦荡，光芒万丈。
            </p>
          </div>
          <div className="message bot-message">
            {/* 模拟bot发言 */}
            <ChatbotIcon />
            {/* <p className="message-text">一句简短的打招呼</p> */}
            <p className="message-text">
              1.不需要建议，不需要认同，我喜欢她就值得。2.永远真诚，永远简单，生活和我都会发光。3.把自己活成一束光，自信坦荡，光芒万丈。
            </p>
          </div>
          <div className="message user-message">
            {/* 模拟用户发言 */}
            <span className="material-symbols-outlined">self_improvement</span>
            <p className="message-text">
              1.不需要建议，不需要认同，我喜欢她就值得。2.永远真诚，永远简单，生活和我都会发光。3.把自己活成一束光，自信坦荡，光芒万丈。
            </p>
          </div>
        </div>
        {/* Chatbot Footer */}
        <div className="chatbot-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="说话呀～"
              className="message-input"
              required
            />
            <button className="material-symbols-outlined">
              keyboard_arrow_up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
