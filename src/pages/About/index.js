import React from 'react';

import './styles.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ThiagoProfile from '../../assets/thiago.jpg';
import MatheusProfile from '../../assets/matheus.jpg'
import FelipeProfile from '../../assets/felipe.png';

function About() {
    return (
        <div>
            <Header />

            <div className="container">
                <p className="about-title">Iniciativa</p>
                <p className="about-text">Distribuir conhecimento através das plataformas sociais para fomentar o interesse de pessoas pelas áreas trabalhadas por nós. Dessa maneira, as pessoas terão um crescimento individual, reflexivo e intelectual.</p>
            </div>

            <div className="container">
                <p className="about-title">Quem somos nós?</p>
                <div className="people-container">
                    <div className="person">
                        <img className="about-img" src={ThiagoProfile} alt="" />
                        <p className="about-name">Thiago Guerino Amaral</p>
                        <p className="about-text">Aspirante a programador, amante da matemática e atleta nas horas vagas. Sou apaixonado pelas ciências exatas e pretendo ensinar tudo que sei de uma maneira que fará as pessoas se apaixonarem pela área também.</p>
                    </div>

                    <div className="person">
                        <img className="about-img" src={MatheusProfile} alt="" />
                        <p className="about-name">Matheus Mol Eyer Lage</p>
                        <p className="about-text">Sou um jovem, estudante de Direito, apaixonado pelo Brasil. Trabalho incansavelmente para realizar diariamente o meu maior sonho: contribuir para uma mudança política, econômica e social positiva no Brasil.</p>
                    </div>

                    <div className="person">
                        <img className="about-img" src={FelipeProfile} alt="" />
                        <p className="about-name">Felipe Lima Queiroga</p>
                        <p className="about-text">Compositor, Produtor Musical, Criador de Conteúdo para YouTube e Instagram. Correndo atrás do sonho de conseguir mostrar meu trabalho para o mundo e ajudar as pessoas a encontrar mais sentido na vida por meio da música.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;