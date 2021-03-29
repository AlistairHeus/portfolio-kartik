import React from 'react'
import './Skills.css'


function Skills() {
    return (
      <div className="skill-bars">
      <div className="bar">
        <div className="info">
          <span>HTML</span>
        </div>
        <div className="progress-line html">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>CSS</span>
        </div>
        <div className="progress-line css">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Node.js</span>
        </div>
        <div className="progress-line jquery">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Python</span>
        </div>
        <div className="progress-line python">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>MySQL</span>
        </div>
        <div className="progress-line mysql">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Bootstrap</span>
        </div>
        <div className="progress-line mysql">
          <span></span>
        </div>
      </div>
    </div>
    )
}

export default Skills
