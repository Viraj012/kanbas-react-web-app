import React from 'react';
import * as db from "../../Database";
import { useParams } from "react-router";
import { LuFileEdit } from "react-icons/lu";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaEllipsisV, FaCheckCircle, FaGripVertical, FaFileAlt } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from '../Modules/GreenCheckmark';

function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
        <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuFileEdit className="me-2 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                  >
                    {`${assignment._id} - ${assignment.title}`}
                  </a>
                  <br />
                  Multiple Modules | <b>Not available</b> until{" "}
                  {assignment["available-from"]} at 12:00am | <b>Due</b>{" "}
                  {assignment["due-date"]} at 11:59pm | {assignment.points} pts
                </div>
              </div>
              <div className="float-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
}

export default Assignments;