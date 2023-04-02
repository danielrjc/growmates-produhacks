import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (inputValue) => {
        if (inputValue.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputValue, sender: 'user' },
                { text: 'How can I help you?', sender: 'bot' },
            ]);
        }
    };

    const styles = {
        chatBubble: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '300px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
        },
        chatContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        messagesContainer: {
            flexGrow: 1,
            padding: '10px',
            overflowY: 'auto',
        },
        message: {
            padding: '5px 10px',
            borderRadius: '5px',
            marginBottom: '10px',
            maxWidth: '70%',
        },
        userMessage: {
            backgroundColor: '#e0e0e0',
            alignSelf: 'flex-end',
        },
        botMessage: {
            backgroundColor: '#e6f7ff',
            alignSelf: 'flex-start',
        },
        inputContainer: {
            padding: '10px',
            display: 'flex',
        },
        input: {
            flexGrow: 1,
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #e0e0e0',
            outline: 'none',
        },
        sendButton: {
            marginLeft: '10px',
            padding: '5px 10px',
            borderRadius: '5px',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.chatBubble}>
            <div style={styles.chatContainer}>
                <div style={styles.messagesContainer}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.message,
                                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        style={styles.input}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handleSendMessage(event.target.value);
                                event.target.value = '';
                            }
                        }}
                    />
                    <button
                        onClick={(event) => {
                            handleSendMessage(event.target.previousSibling.value);
                            event.target.previousSibling.value = '';
                        }}
                        style={styles.sendButton}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
