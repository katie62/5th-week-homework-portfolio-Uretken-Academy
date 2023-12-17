import React from 'react'
import './Skills.css';
import GraphicDesign from '../../assets/GraphicDesign.png';
import Python from '../../assets/Python.png';
import Reactjs from '../../assets/React.png';

function Skills() {
  return (
    <section id='skills'>
      <span className="skillTitle"> What can I do?</span>  
      <div className="skillBars">
        <div className="skillBar">
            <img src={GraphicDesign} alt="GraphicDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Graphic Design</h2>
                
            </div>
        </div>

        <div className="skillBar">
            <img src={Python}alt="Python" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Python</h2>
                
            </div>
        </div>

        <div className="skillBar">
            <img src= {Reactjs} alt="Reactjs" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React.js</h2>
              
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;