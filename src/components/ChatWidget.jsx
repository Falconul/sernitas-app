import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import ediyoruz
import "../styles/ChatWidget.css";

const ChatWidget = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showTyping, setShowTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);

  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme sağlıyoruz

  // Soruları önceden tanımlıyoruz
  const questions = [
    "Sağlık sektörü hakkında bilgi almak istiyorum.",
    "Almanya'da iş fırsatları nedir?",
    "Başvuru süreci hakkında bilgi alabilir miyim?",
    "Vize ve oturum için rehberlik alabilir miyim?",
    "Çıkış yapabilir miyim?"
  ];

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
      const botReply = getBotReply(message);
      setShowTyping(true);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, sender: "bot" },
        ]);
        setShowTyping(false);
        setShowQuestions(false);
      }, 1000);
    }
  };

  // Butona tıkladığında Vize sayfasına yönlendirme
  const navigateToVize = () => {
    navigate("/vize"); // '/vize' sayfasına yönlendiriyor
  };

  const getBotReply = (userMessage) => {
    const userMessageLower = userMessage.toLowerCase();

    if (userMessageLower.includes("vize") || userMessageLower.includes("oturum")) {
      return (
        <div>
          <p>Almanya'ya vize ve oturum başvurusu için gerekli belgeler hakkında daha fazla bilgi almak için lütfen </p>
          <button onClick={navigateToVize}>Buraya tıklayın</button> {/* Yönlendiren buton */}
        </div>
      );
    }

    return "Üzgünüm, bu konuda yardımcı olamıyorum.";
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleQuestionClick = (question) => {
    setMessages([]);
    setShowTyping(true);
    setShowQuestions(false);

    setTimeout(() => {
      setShowTyping(false);
      setMessages([{ text: question, sender: "user" }]);
      const botReply = getBotReply(question);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, sender: "bot" },
        ]);
      }, 1000);
    }, 2000);
  };

  const handleBackToQuestions = () => {
    setMessages([]);
    setShowQuestions(true);
  };

  return (
    <div>
      <div className="chat-widget" onClick={() => setShowChat(!showChat)}>
        <span>Chat</span>
      </div>

      <div className={`chat-popup ${showChat ? "show" : ""}`}>
        <div className="chat-header">
          <span>Chat with us</span>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "user-message" : "bot-message"}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          {showTyping && (
            <div className="bot-message">
              <p>Yazıyor...</p>
            </div>
          )}
        </div>

        {showQuestions && (
          <div className="questions-list">
            {questions.map((question, index) => (
              <div
                key={index}
                className="question-item"
                onClick={() => handleQuestionClick(question)}
              >
                <p>{question}</p>
              </div>
            ))}
          </div>
        )}

        {!showQuestions && (
          <div className="back-btn" onClick={handleBackToQuestions}>
            <span>Geri Dön</span>
          </div>
        )}

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
