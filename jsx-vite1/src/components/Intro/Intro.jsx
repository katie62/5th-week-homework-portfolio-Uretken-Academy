import React from 'react';
import './Intro.css'
import bg from '../../assets/introbg.jpg'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="Intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
             <span className="introText">I'm <span className="introName">Kayra</span>  <br/> Designer</span>
             <p className="introPara">I'm a high school student in Meram Anatolian High School. <br/> I'm also an amateur artist and front end developer. <br/> I have interest  in  space tech, coding and art.</p>
             <Link><button className="btn">Contact Me!</button></Link>

        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;