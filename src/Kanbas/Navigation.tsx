import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaGear, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110, position: 'fixed', left: 0, top: 0, bottom: 0 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="70px" /></a>

      <Link to="/Kanbas/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" />Account</Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />Dashboard</Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />Courses</Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
        <FaCalendarAlt className="fs-1 text-danger" />Calendar</Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" />Inbox</Link>

      <Link to="/Labs" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
        <FaGear className="fs-1 text-danger" />  Labs</Link>
    </div>
  );
}
