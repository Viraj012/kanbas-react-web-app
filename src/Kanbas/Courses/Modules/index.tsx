import React from 'react';
import GreenCheckmark from "./GreenCheckmark";
function Modules() {
  return (
    <div className="modules-container">
      <div className="content-wrapper">
        <div className="main-content">
          <div className="modules-controls">
            <button className="btn btn-secondary">Collapse All</button>
            <button className="btn btn-secondary">View Progress</button>
            <div className="dropdown">
              <button className="btn btn-success dropdown-toggle">Publish All</button>
            </div>
            <button className="btn btn-danger">+ Module</button>
          </div>
          <ul className="modules-list" >
            
            <li className="module">
              <div className="module-header"  >
                <span className="module-title">Week 1</span>
                <div className="module-actions">
                <GreenCheckmark />
                  <button className="btn btn-sm btn-light">+</button>
                  <button className="btn btn-sm btn-light">⋮</button>
                </div>
              </div>
              <ul className="lesson-list">
                <li className="lesson">
                  <span className="lesson-title">LEARNING OBJECTIVES</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title">Introduction to the course</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title">Learn what is Web Development</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title">Introduction to Web Developmen</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title">Creating an HTTP server with Node.js</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
              </ul>
            </li>
            <li className="module">
              <div className="module-header">
                <span className="module-title">Week 2</span>
                <div className="module-actions">
                <GreenCheckmark />
                  <button className="btn btn-sm btn-light">+</button>
                  <button className="btn btn-sm btn-light">⋮</button>
                </div>
              </div>
              <ul className="lesson-list">
                <li className="lesson">
                  <span className="lesson-title">LEARNING OBJECTIVES</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title"> ⁠Learn how to create user interfaces with HTML</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
                <li className="lesson">
                  <span className="lesson-title">Deploy the assignment to Netlify o SLIDES</span>
                  <div className="module-actions">
                  <GreenCheckmark />
                  <button className="btn btn-sm btn-light">⋮</button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
    
  );
}

export default Modules;