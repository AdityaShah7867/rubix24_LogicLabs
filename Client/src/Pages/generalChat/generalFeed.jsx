import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddPost from './AddPost';

const GeneralFeed = () => {

  const posts = [
    {
      id: 1,
      imageUrl: 'https://media.licdn.com/dms/image/D4D22AQGpdjv45CfSqw/feedshare-shrink_800/0/1704040796652?e=1708560000&v=beta&t=5bdxH9paQZFD4hRWPfU7FaQCqvJHACXZ4W8k_5U1oLk',
      caption: 'My github STATS!!',
      likes: 150
    },
    {
      id: 2,
      imageUrl: 'https://media.licdn.com/dms/image/D4D22AQGDQnC7iQBmQQ/feedshare-shrink_800/0/1687705909809?e=1708560000&v=beta&t=gzAoXuX2zgy41gYVp-T9A-XT6aab9UZMoIDfqV6q7RA',
      caption: 'My new achievement.',
      likes: 230
    }
  
  ];

 
  const [likes, setLikes] = useState(posts.reduce((acc, post) => {
    acc[post.id] = post.likes;
    return acc;
  }, {}));

 
  const handleLike = (postId) => {
    setLikes({
      ...likes,
      [postId]: likes[postId] + 1
    });
  };

  return (
    <div className="container" style={{marginTop:"5%"}}>
        <AddPost/>
        <center>
    <div style={{marginTop:"20px"}}>
      {posts.map((post) => (
        <div key={post.id} className="card mb-4" style={{maxWidth:"500px",maxHeight:"600px"}}>
          <img src={post.imageUrl} className="card-img-top" alt="..." style={{maxHeight:"250px",padding:5,}} />
          <div className="card-body">
            <p className="card-text">{post.caption}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleLike(post.id)}
            >
              <FontAwesomeIcon icon={faHeart} /> Like {likes[post.id]}
            </button>
          </div>
        </div>
      ))}
      </div>
      </center>
    </div>
  );
};

export default GeneralFeed;