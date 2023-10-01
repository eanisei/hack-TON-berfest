import React, { useState } from 'react';

import { useBusinessCardContract } from "../hooks/useBusinessCardContract";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import me from "../assets/me.jpeg"

import './BusinessCard.css';

export function BusinessCard() {
  const { likes, sendLike } = useBusinessCardContract();

  const initialAbout = "Geek";
  const initialInterests = "Technologies";
  const initialName = "TON Society";
    const initialRole = "Europe Community";
    const [name, setName] = useState(initialName);
    const [role, setRole] = useState(initialRole);

  const [about, setAbout] = useState(initialAbout);
  const [interests, setInterests] = useState(initialInterests);
  const [isChanged, setIsChanged] = useState(false);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, initialValue: string) => 
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setter(event.target.value);
            setIsChanged(
                event.target.value !== initialValue ||
                about !== initialAbout ||
                interests !== initialInterests
            );
        }

  const handleUpdate = () => {
    console.log("Updated:", { name, role, about, interests });

    setIsChanged(false);
  };

  return (
    <div className='container'>
      <div className='img-container'>
        <img className='main-img' src={me} alt="me" />
      </div>

      <div className="like-container">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={() => sendLike()} />
          &nbsp;<span>{likes}</span>
        </div>

      <div className='sub-container'>
         <div className="profile-name">
                    <h3>Name</h3>
                    <input value={name} onChange={handleInputChange(setName, initialName)} placeholder="Your name..."/>
                </div>
                <div className="profile-role">
                    <h3>Role</h3>
                    <input value={role} onChange={handleInputChange(setRole, initialRole)} placeholder="Your role..."/>
                </div>

        

        <div className="about">
          <h3>About</h3>
          <input value={about} onChange={handleInputChange(setAbout)} />
        </div>
        <div className="interest">
          <h3>Interests</h3>
          <input value={interests} onChange={handleInputChange(setInterests)} />
        </div>
        <button onClick={handleUpdate} disabled={!isChanged}>Update</button>
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


