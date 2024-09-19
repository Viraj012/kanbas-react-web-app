function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br/>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
  
        <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web application 
        running on Netlify. The landing page should include the following: Your full name and section Links 
        to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories 
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
  
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
  
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>
  
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="PTS">Pts</option>
                <option value="GPA">GPA</option>
              </select>
            </td>
          </tr>
  
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="IN-PERSON">In-Person</option>
              </select>
              <br />
  
              <label>Online Entry Options</label>
              <br />
              <input
                type="checkbox"
                name="check-online-opt"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-opt"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-opt"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-online-opt"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-online-opt"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
  
          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <select id="wd-assign-to">
                <option value="EVERYONE">Everyone</option>
                <option value="INDIVIDUAL">Individual</option>
              </select>
              <br />
  
              <label htmlFor="wd-due-date">Due</label>
              <br />
              
              <input type="date" id="wd-due-date" value="2024-02-13" />
  
              <br />
              <label htmlFor="wd-available-from">Available from</label> &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input type="date" id="wd-available-from" value="2024-02-07" />
  
                
              <input type="date" id="wd-available-until" value="2024-02-27" />
            </td>
          </tr>
        </table>
        <br />
  
        <button id="wd-btnCancel" type="button">
          Cancel
        </button>
        <button id="wd-btnSave" type="button">
          Save
        </button>
      </div>
    );
  }
  
  export default AssignmentEditor;