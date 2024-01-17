import React from 'react';

const AddPost = () => {
  return (
    <div style={styles.card}>
      <img
        src="https://avatars.githubusercontent.com/u/121731399?v=4"
        alt="Profile"
        style={styles.profileImage}
      />
      <div style={styles.content}>
        <textarea style={styles.textBox} placeholder="Type your message"></textarea>
        <button style={styles.galleryButton}>
          <img
            src="https://img.icons8.com/ios/50/000000/gallery.png"
            alt="Gallery"
            width="30px"
            height="30px"
          />
        </button>
      </div>
      <button style={styles.sendButton}>Post</button>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '800px',
    maxHeight: '120px',
    margin: 'auto',
  },
  profileImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  textBox: {
    width: '100%',
    marginBottom: '10px',
  },
  galleryButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AddPost;
