import React, { useState } from 'react';
import TrendingCrops from './trendingCrops';

const Feed = () => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Post submitted:', postText);
    setPostText('');
  };

  // Sample post data
  const postData = [
    {
      id: 1,
      user: {
        name: 'Robert Moore',
        avatar: '/pfp.png',
      },
      description: "Nothing beats the satisfaction of growing your own food! 🍅🌶️🥬 Whether it's a small herb garden or a full vegetable patch, gardening is a rewarding and fulfilling hobby that everyone can enjoy. Get your hands dirty and start growing today! #gardening #growyourownfood #greenthumb",
      image: '/feedphoto1.png',
      actions: {
        likes: 10,
        comments: 5,
      },
    },
    {
      id: 2,
      user: {
        name: 'Robert Moore',
        avatar: '/pfp.png',
      },
      description: 'Amazing view of the sunset',
      image: '/feedphoto1.png',
      actions: {
        likes: 20,
        comments: 10,
      },
    },
  ];

  const styles = {
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '20px',

      },
    feedContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      paddingTop: '20px',
    },
    postBox: {
      backgroundColor: 'rgba(209, 209, 209 , 0.75)',
      borderRadius: '10px',
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
    },
    userContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    inputBox: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      outline: 'none',
      resize: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '10px',
    },
    icons: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cameraIcon: {
      marginRight: '10px',
      color: '#888',
      cursor: 'pointer',
    },
    postButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    // Add other styles here
    postContainer: {
      backgroundColor: 'rgba(209, 209, 209 , 0.75)',
      borderRadius: '10px',
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
    },
    postHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    postAvatar: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    postDescription: {
      marginBottom: '10px',
    },
    postImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    actionButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#888',
      cursor: 'pointer',
      outline: 'none',
    },
  };
  

  return (
    <div style={styles.mainContainer}>
    <div style={styles.feedContainer}>
    <div style={styles.postBox}>
        <div style={styles.userContainer}>
          <img
            src="/avatar.jpg"
            alt="Avatar"
            style={styles.avatar}
          />
          <span>User Name</span>
        </div>
        <textarea
          value={postText}
          onChange={handlePostTextChange}
          placeholder="What's on your mind?"
          style={styles.inputBox}
        />
        <div style={styles.icons}>
          <i className="fas fa-camera" style={styles.cameraIcon} />
          <button onClick={handleSubmit} style={styles.postButton}>
            Post
          </button>
        </div>
      </div>
      {postData.map((post) => (
        <div key={post.id} style={styles.postContainer}>
          <div style={styles.postHeader}>
            <img
              src={post.user.avatar}
              alt="Avatar"
              style={styles.postAvatar}
            />
            <span>{post.user.name}</span>
          </div>
          <div style={styles.postDescription}>{post.description}</div>
          <img
            src={post.image}
            alt="Post content"
            style={styles.postImage}
          />
          <div style={styles.actionButtons}>
            <button style={styles.actionButton}>
              <i className="fas fa-thumbs-up"></i> {post.actions.likes} 
            </button>
            <button style={styles.actionButton}>
              <i className="fas fa-comment"></i> {post.actions.comments}{' '}
              
            </button>
            <button style={styles.actionButton}>
            <i className="fas fa-bookmark"></i> 
            </button>
          </div>
          </div>
      ))}
      
    </div>
    <TrendingCrops />
    </div>
    
  );
};

export default Feed;
