import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import MiniLogo from '../../assets/mini_logo.png'
import LogoYoutube from '../../assets/youtube.svg';
import LogoTwitter from '../../assets/twitter.svg';
import LogoInstagram from '../../assets/instagram.svg';

import DollarIcon from '../../assets/dollar_sign.png';
import NotesIcon from '../../assets/notes.png';
import AboutIcon from '../../assets/about.png';


function HomePage() {
    const history = useHistory();

    return (
        <div>
            <Header />

            <div className="welcome">
                <p>Onde você cresce aprendendo.</p>
                <img src={MiniLogo} alt="" />
            </div>

            <div className="learn">
                <div className="text-block">
                    <p>Assista nossas playlists e aprenda tudo sobre um tópico novo.</p>
                </div>
                <button onClick={() => history.push('/playlists')}>Acessar as playlists</button>
            </div>

            <div className="about">
                <div className="box-container">
                    <div className="box">
                        <p className="box-title">Educação Gratuita</p>
                        <img src={DollarIcon} alt="" />
                        <p className="box-text">Acreditamos que para termos um mundo melhor o acesso a educação de qualidade deve ser gratuito. Por isso, todo nosso conteúdo pode ser acessado de graça.</p>
                    </div>

                    <div className="box">
                        <p className="box-title">Proposta</p>
                        <img src={NotesIcon} alt="" />
                        <p className="box-text">Aprender pelo prazer de aprender. Apreciar a beleza do conhecimento. Se divertir com o aprendizado. Essa é uma visão da educação não passada nas escolas, algo que gostaríamos de mudar.</p>
                    </div>

                    <div className="box">
                        <p className="box-title">Quem somos nós</p>
                        <img src={AboutIcon} alt="" />
                        <p className="box-text">Somos um grupo de três estudantes universitários que querem distribuir conteúdo educacional sobre as áreas que somos apaixonados, contribuindo para a educação dos brasileiros.</p>
                    </div>
                </div>

                <button onClick={() => history.push('/sobre')}>Ler mais</button>
            </div>

            <div className="learn">
                <div className="text-block">
                    <p>Acesse um espaço especial feito para te surpreender com um novo aprendizado.</p>
                </div>
                <button onClick={() => history.push('/aprender')}>Espaço de aprendizado</button>
            </div>

            <div className="social-media">
                <p>Acompanhe nossas redes sociais.</p>
                <div>
                    <img onClick={() => { window.location.href = "https://twitter.com/edu_cranius" }} src={LogoTwitter} alt="" />
                    <img onClick={() => { window.location.href = "https://instagram.com/edu.cranius" }} src={LogoInstagram} alt="" />
                    <img onClick={() => { window.location.href = "https://www.youtube.com/channel/UCHAKdQqo3nu0OmbgA9s2xqg" }} src={LogoYoutube} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;