export default function CourseStatus() {
    return (
      <div className="side-panel" >
          <h3>Course Status</h3>
          <div className="status-buttons">
            <button className="btn btn-secondary">Unpublish</button>
            <button className="btn btn-success">Publish</button>
          </div>
          <div className="side-actions">
            <button className="btn btn-light">Import Existing Content</button>
            <button className="btn btn-light">Import from Commons</button>
            <button className="btn btn-light">Choose Home Page</button>
            <button className="btn btn-light">View Course Stream</button>
            <button className="btn btn-light">New Announcement</button>
            <button className="btn btn-light">New Analytics</button>
            <button className="btn btn-light">View Course Notifications</button>
          </div>
        </div>
  );}
  