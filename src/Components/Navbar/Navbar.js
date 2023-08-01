import React, { useContext, useState } from "react";
import "./navbar.css";
import { BsGlobe } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { RiFullscreenExitFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import Man from "../../assets/man.jpeg";
import { DarkModeContext } from "../../Context/darkModeContext";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const {dispatch} = useContext(DarkModeContext)

  const handleClcik = () => {
    setShow(!show)
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg_light shadow-sm shadow__sm">
        <div className="">
          <input type="search" className="form-control ser_ach" placeholder="Search" style={{borderRadius : 0}} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3 ">
              <a className="nav-link px-0 eng_lish" href="#">
                <BsGlobe className="icons" /> English
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-0" href="#" onClick={()=> {dispatch({type : "TOOGLE"}); handleClcik()}}>
                {show ? <CiSun className="iconss"/> : <FaRegMoon  className="icons"/>}
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-0" href="#">
                <RiFullscreenExitFill className="icons" />
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-0" href="#">
                <IoMdNotificationsOutline  className="icons"/>
                <span className="noti pl-0">1</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-0" href="#">
                <FiMessageSquare className="icons"/>
                <span className="noti pl-0">1</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-0 py-0" href="#">
                <img src={Man} className="img_fluid" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
