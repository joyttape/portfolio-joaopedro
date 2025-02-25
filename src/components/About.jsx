
import React from 'react';
import foto1 from "../imgs/icon1.jpg"

const About = () => {
  return (
    <section id="about" className='about'>
      <h2>Sobre Mim</h2>
      <div className='about_div'>
      <p>
        Olá! Meu nome é João Pedro, tenho 19 anos e moro no munícipio Jaru localizado no estado de Rondônia. Desde sempre tive interesse na área de informática, especialmente
        no campo do design de interface do usuário (UI) e desenvolvimento front-end. Explorar ferramentas, linguagens e conceitos nesse âmbito tem sido uma paixão constante para mim. Através dessa
        jornada, tenho buscado aprimorar minhas habilidades e expandir meu conhecimento 
      </p>
      <img src={foto1} className='img1'></img>
      </div>
      
     
    </section>
  );
};

export default About;