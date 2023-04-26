import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SkipButton from '../../assets/skip.png';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Learn() {
    const [videos, setVideos] = useState([]);
    const [activeVideo, setActiveVideo] = useState("");

    const [onlyE, setOnlyE] = useState(false);
    const [onlyH, setOnlyH] = useState(false);

    useEffect(() => {
        async function getVideos() {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbfqwGUJwbwjKLRDQleR22tne0cu_Attk&channelId=UCHAKdQqo3nu0OmbgA9s2xqg&part=snippet,id&order=date&maxResults=25');

            let temp = [];

            response.data.items.forEach(element => {
                temp.push({
                    id: element.id.videoId,
                    title: element.snippet.title,
                });
            });

            shuffleArray(temp);
            setActiveVideo(temp[0].id)
            setVideos(temp);
        }

        getVideos();
    }, []);

    return (
        <div>
            <Header />
            <div className="main-container">
                <p className="title">Aprenda algo novo aleatoriamente.</p>

                <iframe className="video-player"
                    src={`https://www.youtube.com/embed/${activeVideo}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    autoPlay
                />

                <div className="button-container">
                    <button onClick={() => { setOnlyE(!onlyE); setOnlyH(false); }} className={onlyE ? 'active' : 'inactive'}>Apenas Exatas</button>
                    <button onClick={() => { setOnlyH(!onlyH); setOnlyE(false); }} className={onlyH ? 'active' : 'inactive'}>Apenas Humanas</button>
                    <button onClick={() => { setActiveVideo(videos[randInt(0, videos.length - 1)].id) }}><img src={SkipButton} alt="" /></button>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Learn;