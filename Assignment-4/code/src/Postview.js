import React, { useState, useEffect } from 'react';
import './Postview.css';

import axios from 'axios';

import logo from './images/logo.png';
import camera from './images/camera.png';
import menuIcon from './images/menu-icon.png';
import likeIcon from './images/like.png';
import shareIcon from './images/share.png';


const Postview = () => {
  const [posts, setPost] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3004/user')
      .then(res => {
        setPost(res.data)
      })
  }, [])
  const date = new Date().toDateString();
  if (posts) {
    return (
      <div className='site-container'>
        <div className='header'>
          <header>
            <img className='logo' src={logo} alt="logo" />
            <h1>InstaClone</h1>
            <img className='camera-logo' src={camera} alt="camera-logo" />
          </header>
        </div>
        {posts.map(content => {
          return (
            <div className='post-container'>
              <div className='card'>
                <div className='card-container'>
                  <div className='user-detail'>
                    <div className='person-info'>
                    <p ><strong>{content.name}</strong></p>
                    <p >{content.location}</p>
                    </div>
                    
                    <div className='menu-icon'>
                      <img src={menuIcon} alt="menu" />
                    </div>
                  </div>
                  <div className='post-img'>
                    <img src={content.PostImage} alt="posted-img" />
                  </div>
                  <div className='post-description'>
                    <img className='like' src={likeIcon} alt='like' />
                    <img className='share' src={shareIcon} alt='share' />
                    <span>{content.date}</span>
                    <p className='like-count'>{content.likes} likes</p>
                    <p className='description'><strong>{content.description}</strong></p>
                  </div>
                </div>  
              </div>
            </div>


          )
        })}

      </div>
    )
  }
}

export default Postview;