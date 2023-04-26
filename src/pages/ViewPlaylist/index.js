import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ViewPlaylist() {
    const location = useLocation();
    const playlistId = location.search.slice(1);

    const [title, setTitle] = useState('');
    const [playlist, setPlaylist] = useState([{}]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        async function getTitle() {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&maxResults=25&key=AIzaSyAbfqwGUJwbwjKLRDQleR22tne0cu_Attk`);
            setTitle(response.data.items[0].snippet.title);
        }

        async function getPlaylist() {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyAbfqwGUJwbwjKLRDQleR22tne0cu_Attk&maxResults=25`);

            let temp = [];

            response.data.items.forEach(element => {
                temp.push({
                    id: element.snippet.resourceId.videoId,
                    title: element.snippet.title,
                    thumbnail: element.snippet.thumbnails.medium.url,
                });
            });

            setPlaylist(temp);
        }

        getTitle();
        getPlaylist();
    }, [playlistId]);

    function nextVideo() {
        if (activeIndex < playlist.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    }

    function previousVideo() {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }

    return (
        <div className="playlist-viewer">
            <Header />

            <h1 className="page-title">{title}</h1>

            <div className="player-container">
                <iframe className="player" src={`https://www.youtube.com/embed/${playlist[activeIndex].id}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />

                <div className="playlist-box">
                    <div className='controller-buttons'>
                        <button onClick={previousVideo} >Anterior</button>
                        <button onClick={nextVideo}>Próximo</button>
                    </div>

                    {playlist.map((video, index) => (
                        <div
                            key={video.id + video.title}
                            className="single-playlist"
                            onClick={() => setActiveIndex(index)}
                            style={index === activeIndex ? { backgroundColor: '#deba2c', borderColor: '#deba2c' } : {}}
                        >
                            <img src={video.thumbnail} alt="" />
                            <p>{video.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ViewPlaylist;
