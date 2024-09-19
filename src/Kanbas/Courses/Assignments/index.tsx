function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
            <br />
            Multiple Modules | <b>Not available</b> until Feb 7 at 12:00am |{" "}
            <b>Due</b> Feb 13 at 11:59pm | 100 pts
          </li>
  
          <li className="wd-assignment-list-item">
            {/* Complete On Your Own */}
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2 - Solidity + Smart Contract
            </a>
            <br />
            Multiple Modules | <b>Not available</b> until Feb 13 at 12:00am |{" "}
            <b>Due</b> Feb 20 at 11:59pm | 100 pts
          </li>
  
          <li className="wd-assignment-list-item">
            {/* Complete On Your Own */}
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A2 - NextJS + React
            </a>
            <br />
            Multiple Modules | <b>Not available</b> until Feb 20 at 12:00am |{" "}
            <b>Due</b> Feb 27 at 11:59pm | 100 pts
          </li>
        </ul>
      </div>
    );
  }
  
  export default Assignments;