import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/blockchain.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Blockchain
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home">
              <img src="/images/mobappdev.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1236 Mobile App 
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home">
          <img src="/images/devops.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1237 Devops
            </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
        </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/1234/Home">
          <img src="/images/dbms.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1238 DBMS
            </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
        </Link>
        </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/1234/Home">
          <img src="/images/python.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1239 Python
            </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
        </Link>
        </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
          to="/Kanbas/Courses/1234/Home">
          <img src="/images/ml.jpg" width="100%" height={160} />
          <div className="card-body">
          <h5 className="wd-dashboard-course-title card-title">
              CS1240 Machine Learning
            </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <button className="btn btn-primary"> Go </button>
          </div>
        </Link>
        </div>
        </div>


        
      </div>
    </div>
    </div>


  );
}

