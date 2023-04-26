import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css'
import LogoUniversit from '../../assets/logo.png';
import LogoYoutube from '../../assets/youtube.png';
import LogoTwitter from '../../assets/twitter.png';
import LogoInstagram from '../../assets/instagram.png';

function Universit() {
    const history = useHistory();

    return (
        <div className="header-container">
            <ul className="header-list">
                <li onClick={() => history.push('/aprender')} className="header-list-item">Aprender</li>
                <li onClick={() => history.push('/playlists')} className="header-list-item">Playlists</li>
            </ul>

            <div onClick={() => history.push('/')} className="header-center">
                <img
                    className="header-logo"
                    src={LogoUniversit}
                    alt="Universit Education"
                />
            </div>

            <ul className="header-list">
                <li onClick={() => history.push('/sobre')} className="header-list-item">Sobre</li>
                <li onClick={() => { window.location.href = "https://twitter.com/edu_cranius" }} className="header-list-item"><img src={LogoTwitter} alt="" /></li>
                <li onClick={() => { window.location.href = "https://instagram.com/edu.cranius" }} className="header-list-item"><img src={LogoInstagram} alt="" /></li>
                <li onClick={() => { window.location.href = "https://www.youtube.com/channel/UCHAKdQqo3nu0OmbgA9s2xqg" }} className="header-list-item"><img src={LogoYoutube} alt="" /></li>
            </ul>
        </div>
    );
}

export default Universit;