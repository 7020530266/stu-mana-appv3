import React from "react";
import './assets/css/sb-admin-2.min.css';
import RocketImg from './assets/imgs/undraw_rocket.svg';



function Sidebar() {

    return (
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className=" mx-3">
              GUVI 
            </div>
          </a>
  
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <span>Dashboard</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
  
          <div className="sidebar-heading">Guvi Family Overview</div>
  
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/TeacherV"
              >            
              <span>Teacher</span>
            </a>
          </li>
  
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/StudentV"
            >
              <span>Student</span>
            </a>
          </li>
  
          <hr className="sidebar-divider" />
  
          <div className="sidebar-heading">Admin</div>
  
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/TeacherE"
            >
              <span>Teacher</span>
            </a>
          </li>
  
          <li className="nav-item">
          <a className="nav-link collapsed"
              href="/StudentE"
            >
              <span>Student</span>
            </a>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />
  
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div>
  
          <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              src={RocketImg}
              alt="..."
            />
            <p className="text-center mb-2">
              <strong>GUVI</strong> has capability to upskill and make proficient in the IT technolgies who not aware about IT technologies!
            </p>
            <a
              className="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </a>
          </div>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;