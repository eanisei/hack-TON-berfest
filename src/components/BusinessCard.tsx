import React from 'react';
import {useBusinessCardContract} from "../hooks/useBusinessCardContract";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { faYoutube, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import me from "../assets/me.jpeg"

import './BusinessCard.css';

export function BusinessCard() {
  const {likes, sendLike} = useBusinessCardContract();

  return (
    <div className='container'>
      
      <div className='img-container'>
        <img className='main-img' src={me} alt="me" />
      </div>
      
      <div className='sub-container'>
        <h2 className='name'>TON Society</h2>
        <h4 className='role'>Europe Community</h4>
        {/* <h5 className='web'><a href="http://society.ton.org">Society.ton.org</a></h5> */}
        <div className="like-container">
                <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={() => sendLike()} />
                &nbsp;<span>{likes}</span>
            </div>

        <div className='about'>
          <h3>About</h3>
          <p> I'm a tech entrepreneur at heart. The ever-evolving world of technology has always fascinated me, and I've channeled this passion into creating innovative solutions and building successful enterprises. I believe in the transformative power of technology, and I'm always on the lookout for the next big thing that can make a difference in our lives. </p>
        </div>
        <div className='interest'>
          <h3>Interests</h3>
          <p> Outside the tech realm, sports play a significant role in my life. Be it hitting the gym, going for a jog, or catching a live game, sports invigorate my body and mind. Moreover, I have an insatiable hunger for knowledge. Every day presents an opportunity to dive into something new, be it a book, a hobby, or just a fresh perspective on life. For me, learning is not just about personal growth, but it's also a way to connect with the world around me. </p>
        </div>
      </div>
      
      <div className='footer'>
      <a href="https://www.linkedin.com/" aria-label="YouTube" className="youtube">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://github.com/eanisei" aria-label="GitHub" className="github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://t.me/cyber_ea" aria-label="Telegram" className="telegram">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://twitter.com/eanisei" aria-label="Twitter" className="twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    </div>
  );
}


