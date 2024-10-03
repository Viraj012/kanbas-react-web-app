import React from 'react';
import { FaTimes, FaCalendarAlt } from 'react-icons/fa';

function AssignmentEditor() {
  return (
    <div className="wd-assignments-editor">
      <div className="form-group">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1" className="form-control" />
      </div>

    <br/>
      <div  className="assign-content">
        <p>The assignment is <span className="text-danger">available online</span></p>
        <p>Submit a link to the landing page of your Web application running on <span className="text-danger">Netlify</span>.</p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
      </div>
      <br/>

      <div className="form-group">
        <label htmlFor="wd-points">Points</label>
        <input id="wd-points" value="100" className="form-control" />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="wd-group">Assignment Group</label>
        <select id="wd-group" className="form-control">
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECTS</option>
        </select>
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
        <select id="wd-display-grade-as" className="form-control">
          <option>Percentage</option>
          <option>Pts</option>
          <option>Grades</option>
        </select>
      </div>
      <br/>
      <div className="form-group">
        <label>Submission Type</label>
        <div className="assign-content">
        <select className="form-control">
          <option>Online</option>
          <option>In-Person</option>
        </select><br/>
        <div >
        <div className="assign-to">
          <p >Online Entry Options</p>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Text Entry</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" checked /> Website URL</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Media Recordings</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Student Annotation</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> File Uploads</label>
          </div>
        </div>
      </div>
      </div>
      <br/>
      
        <label>Assign</label>
        <div className="assign-content">
          <div className="assign-to">
            <p>Assign to</p>
            <div className="form-group">
        <select id="wd-group" className="form-control">
          <option>Everyone</option>
          <option>Individual</option>
        </select>
      </div>
      <br/> 
          </div>
          <div className="due-date">
            <p>Due</p>
            <div className="date-input">
              <input type="text" value="June 12, 2024, 11:59 PM" className="form-control" />
              <FaCalendarAlt className="calendar-icon" />
            </div>
          </div>
          <div className="availability">
            <div className="available-from">
              <p>Available from</p>
              <div className="date-input">
                <input type="text" value="June 8, 2024, 12:00 AM" className="form-control" />
                <FaCalendarAlt className="calendar-icon" />
              </div>
            </div>
            <div className="until">
              <p>Until</p>
              <div className="date-input">
                <input type="text" value="June 13, 2024, 12:00 AM" className="form-control" />
                <FaCalendarAlt className="calendar-icon" />
              </div>
            </div>
          </div>
          
        </div>
        <br/>
        <div className="button-group">
        <button className="btn btn-secondary">Cancel</button> &nbsp;
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
      
      
     
  );
}

export default AssignmentEditor;