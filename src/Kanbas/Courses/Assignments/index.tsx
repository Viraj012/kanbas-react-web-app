import React from 'react';
import { FaSearch, FaEllipsisV, FaCheckCircle, FaGripVertical, FaFileAlt } from 'react-icons/fa';

function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="assignments-header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="action-buttons">
          <button className="btn btn-secondary">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>
      <div className="assignments-list">
        <div className="assignments-title">
          <div className="title-left">
            <FaGripVertical className="grip-icon" />
            <h2>ASSIGNMENTS</h2>
          </div>
          <div className="title-right">
            <span className="total-percentage">40% of Total</span>
            <button className="btn btn-icon">+</button>
            <button className="btn btn-icon"><FaEllipsisV /></button>
          </div>
        </div>
        <ul className="assignments">
            <li className="assignment-item" >
              <div className="assignment-left">
                <FaGripVertical className="grip-icon" />
                <FaFileAlt className="file-icon" />
              </div>
              <div className="assignment-details">
                <h3>A1</h3>
                <p>
                  <a
                    className="assignment-module"
                    href="#/Kanbas/Courses/1234/Assignments/123" >
                    HTML & Basics
                  </a>
                Not available until May 6  at 12:00am | Due May 12  at 11:59pm | 100 pts
                </p>
                
              </div>
              <div className="assignment-right">
                <FaCheckCircle className="check-icon" />
                <button className="btn btn-icon"><FaEllipsisV /></button>
              </div>
            </li>
            <li className="assignment-item" >
              <div className="assignment-left">
                <FaGripVertical className="grip-icon" />
                <FaFileAlt className="file-icon" />
              </div>
              <div className="assignment-details">
                <h3>A2</h3>
                <p>
                  <a
                    className="assignment-module"
                    href="#/Kanbas/Courses/1234/Assignments/123" >
                    React
                  </a>
                Not available until May 12  at 12:00am | Due May 18  at 11:59pm | 100 pts
                </p>
                
              </div>
              <div className="assignment-right">
                <FaCheckCircle className="check-icon" />
                <button className="btn btn-icon"><FaEllipsisV /></button>
              </div>
            </li>

            <li className="assignment-item" >
              <div className="assignment-left">
                <FaGripVertical className="grip-icon" />
                <FaFileAlt className="file-icon" />
              </div>
              <div className="assignment-details">
                <h3>A3</h3>
                <p>
                  <a
                    className="assignment-module"
                    href="#/Kanbas/Courses/1234/Assignments/123" >
                    Bootstrap
                  </a>
                Not available until May 18  at 12:00am | Due May 24  at 11:59pm | 100 pts
                </p>
                
              </div>
              <div className="assignment-right">
                <FaCheckCircle className="check-icon" />
                <button className="btn btn-icon"><FaEllipsisV /></button>
              </div>
            </li>

        </ul>
      </div>
    </div>
  );
}

export default Assignments;