import React, { useEffect } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom'
import { FaHome, FaChevronDown, FaBars, FaExclamationCircle, FaRegUser,  FaChartBar} from "react-icons/fa";
import { AiOutlineLogout, AiFillSetting, AiOutlineUserAdd } from "react-icons/ai";

import '../assets/css/componentcss/SuperAdminDashboard.css'
import '../assets/css/componentcss/AdminDashboard.css'
import ringer from '../assets/img/ring.mp3'

export default function AdminPanel() {

  useEffect(() => {
    var dropdown = document.querySelectorAll('.dropdown');
    var flag = 1;
    dropdown.forEach((item) => {
      item.addEventListener("click", function () {
        if (flag == 1) {
          item.classList.add("active")
          flag = 0;
        }
        else {
          item.classList.remove("active")
          flag = 1;
        }
      })
    })
  }, []);

  useEffect(() => {
    var sidebar = document.querySelector(".sidebar");
    var flag2 = 0;
    const menu = document.querySelector('.bx-menu');
    menu.addEventListener("click", function () {
      if (flag2 == 0) {
        sidebar.classList.add("close")
        flag2 = 1;
      }
      else {
        sidebar.classList.remove("close")
        flag2 = 0;
      }
    });
  }, []);


  return (
    <>
      <div className={'sidebar'}>
        <audio id="myAudio" controls style={{ display: "none" }}>
          <source src={ringer} type="audio/mpeg" />
        </audio>
        {/* <Button onClick={() => handleAudio()}>Click</Button> */}
        <Link to="/" className="logo-box" style={{ textDecoration: "none" }}>
          <i className='bx bxl-xing'></i>
          <div className="logo-name" ><h6 style={{color:"#fff"}}> Admin Dashboard</h6></div>
        </Link>

        <ul className="sidebar-list">

          <li>
            <div className="title">
              <Link to="/" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-grid-alt'><FaHome /></i>
                <span className="name">Home</span>
              </Link>
            </div>
            <div className="submenu">
              <Link to="/" className="link submenu-title" style={{ textDecoration: "none" }}>Home</Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link to="/AdminPanel/homeDashboard" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-grid-alt'><FaChartBar /></i>
                <span className="name">Dashboard</span>
              </Link>
            </div>
            <div className="submenu">
              <Link to="/AdminPanel/homeDashboard" className="link submenu-title" style={{ textDecoration: "none" }}>Dashboard</Link>
            </div>
          </li>

          <li className="dropdown">
            <div className="title">
              <Link to="/superAdminDashboard/addAgent" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-book-alt'><FaRegUser /></i>
                <span className="name">Complaints</span>
              </Link>
              <i className='bx bxs-chevron-down'><FaChevronDown /></i>
            </div>
            <div className="submenu">
              <Link to="/superAdminDashboard/addAgent" className="link" style={{ textDecoration: "none" }}>Pending complaints</Link>
              <Link to="/superAdminDashboard/allAgent" className="link" style={{ textDecoration: "none" }}>Solved complaints</Link>

            </div>
          </li>

          <li>
            <div className="title">
              <Link to="/AdminPanel/homeDashboard" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-grid-alt'><FaChartBar /></i>
                <span className="name">Testimonials</span>
              </Link>
            </div>
            <div className="submenu">
              <Link to="/AdminPanel/homeDashboard" className="link submenu-title" style={{ textDecoration: "none" }}>Testimonials</Link>
            </div>
          </li>

          <li className="dropdown">
            <div className="title">
              <Link to="/superAdminDashboard/addAmbulance" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-book-alt'><AiOutlineUserAdd /></i>
                <span className="name">Users</span>
              </Link>
              <i className='bx bxs-chevron-down'><FaChevronDown /></i>
            </div>
            <div className="submenu">
              <Link to="/superAdminDashboard/ambulanceBooking" className="link" style={{ textDecoration: "none" }}>Membership</Link>
              <Link to="/superAdminDashboard/addAmbulance" className="link" style={{ textDecoration: "none" }}>Non membership</Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link to="/AdminPanel/sosDetatilPage" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-grid-alt'><AiFillSetting /></i>
                <span className="name">Settings</span>
              </Link>
            </div>
            <div className="submenu">
              <Link to="/AdminPanel/sosDetatilPage" className="link submenu-title" style={{ textDecoration: "none" }}>Settings</Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link to="/AdminPanel/sosDetatilPage" className="link" style={{ textDecoration: "none" }}>
                <i className='bx bx-grid-alt'><AiOutlineLogout /></i>
                <span className="name">Log out</span>
              </Link>
            </div>
            <div className="submenu">
              <Link to="/AdminPanel/sosDetatilPage" className="link submenu-title" style={{ textDecoration: "none" }}>Log out</Link>
            </div>
          </li>

        </ul>

      </div>
      <section className="home">
        <div className="toggle-sidebar" >
          <FaBars className={'bx bx-menu'} style={{ width: 30, height: 30, marginLeft: 10 }} />
        </div>
        <Container style={{ padding: '20px' }} fluid>
          <Row>
            <Col md={12}><Outlet /></Col>
          </Row>
        </Container>
      </section>

      <Modal backdrop="static" keyboard={false} centered>
        <Modal.Body>
          <FaExclamationCircle className='mx-auto d-block' size={50} style={{ color: '#e74c3c' }} />
          {/* <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Name: <span style={{ fontWeight: 'normal' }}>{alertData && alertData.newUserSos.fName} {alertData && alertData.newUserSos.lName}</span></p> */}
          {/* <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Contact: <span style={{ fontWeight: 'normal' }}>{alertData && alertData.newUserSos.contact}</span></p> */}
          {/* <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Email: <span style={{ fontWeight: 'normal' }}>{alertData && alertData.newUserSos.email}</span></p> */}

          <Row>
            <Col>
              {/* <Button variant='success' className='mx-auto d-block' onClick={() => handleAccept(alertData && alertData.newUserSos.id)}>Accept</Button> */}
            </Col>
            <Col>
              {/* <Button variant='danger' className='mx-auto d-block' onClick={() => handleReject(alertData && alertData.newUserSos.id)}>Reject</Button> */}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}
