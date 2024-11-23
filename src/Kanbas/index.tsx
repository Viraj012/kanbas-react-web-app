import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Courses from "./Courses";
import * as db from "./Database";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import { setEnrollments } from "./Courses/Home/reducer";
export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [enrollmentFilterOn, setEnrollmentFilterOn] = useState(true);

    const [course, setCourse] = useState<any>({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAllCourses = async () => {
      try {
        const courses = await courseClient.fetchAllCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAllEnrollments = async () => {
      try {
        const enrollments = await courseClient.fetchAllEnrollments();
        dispatch(setEnrollments(enrollments));
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      enrollmentFilterOn ? fetchCourses() : fetchAllCourses();
    }, [currentUser, enrollmentFilterOn]);
  
    useEffect(() => {
      fetchAllEnrollments();
    }, []);
  
    const addNewCourse = async() => {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse ]);
    };
    const deleteCourse = async(courseId: any) => {
      const status = await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async() => {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  
    return (
      <Session>
        <div id="wd-kanbas">
            
                        <KanbasNavigation />
                   
                       
                        <div className="wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={ <ProtectedRoute> <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              enrollmentFilterOn={enrollmentFilterOn}
              setEnrollmentFilterOn={setEnrollmentFilterOn}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/> </ProtectedRoute>}  />
                            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /> </ProtectedRoute>} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                        </div>
             
        </div>
        </Session>
    );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

