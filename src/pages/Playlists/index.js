// RESTRICT API KEY FOR PRODUCTION: AIzaSyAbfqwGUJwbwjKLRDQleR22tne0cu_Attk

import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Playlists() {
    const history = useHistory();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function getPlaylists() {
            const response = await axios.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCHAKdQqo3nu0OmbgA9s2xqg&key=AIzaSyAbfqwGUJwbwjKLRDQleR22tne0cu_Attk&maxResults=25');

            let temp = [];

            response.data.items.forEach(element => {
                temp.push({
                    id: element.id,
                    title: element.snippet.title,
                    thumbnail: element.snippet.thumbnails.medium.url,
                });
            });

            setPlaylists(temp);
        }

        getPlaylists();
    }, []);

    return (
        <div>
            <Header />

            <p className="page-title">Playlists feitas especialmente para você.</p>

            <div className="all-playlists">
                {playlists.map(playlist => (
                    <div
                        key={playlist.id}
                        className="one-playlist"
                        onClick={() => history.push({
                            pathname: '/playlist', search: playlist.id
                        })}
                    >
                        <img src={playlist.thumbnail} alt="" />
                        <p>{playlist.title}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Playlists;