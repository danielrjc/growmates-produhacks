import React, { useState } from 'react';
import Chat from './chat';

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const styles = {
    footer: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    },
    avatar: {
      width: '65px',
      height: 'auto',
      borderRadius: '50%',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    avatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    chatBox: {
      position: 'absolute',
      bottom: '80px',
      right: 0,
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
  };

  return ( 
    <div style={styles.footer}>
      <div style={styles.avatar} onClick={toggleChat}>
        <img src="/chatbotAvatar.jpg" alt="chatbot" style={styles.avatarImg} />
      </div> 
      {chatOpen && <Chat/>}
    </div>
  );
};

export default Footer;



