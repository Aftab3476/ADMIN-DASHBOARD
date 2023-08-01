import React, { useContext } from "react";
import "./Sidebar.css";
import { RiDashboardLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBorderWidth } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotifications, IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <>
      <div className="card card_sidebar">
        <Link to="/" className="brand py-1">
          <b>CODER_DEV</b>
        </Link>
      </div>
      <div className="card p-2 card_sidebar1">
        <ul className="navbar-nav">
          <p className="nav-item items mb-1">MAIN</p>
          <li className="nav-item nav_items">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <RiDashboardLine className="mt-0 side_icon" />{" "}
                <span className="pb-0 sidebar_data">Dashboard</span>
              </h6>
            </Link>
          </li>
          <p className="nav-item items mb-1 mt-2">LISTS</p>
          <li className="nav-item nav_items pt-1">
            <Link to="/users" className="nav_link">
              <h6 className="pl-2">
                <FaUserShield className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Users</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/products" className="nav_link">
              <h6 className="pl-2">
                <BsBorderWidth className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Products</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <RiDashboardLine className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Orders</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <CiDeliveryTruck className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Delivery</span>
              </h6>
            </Link>
          </li>
          <p className="nav-item items mb-1 mt-2">USEFUL</p>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <IoIosStats className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Status</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <IoMdNotifications className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Notification</span>
              </h6>
            </Link>
          </li>
          <p className="nav-item items mb-1 mt-2">SERVICE</p>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <IoIosStats className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">System Health</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <IoMdNotifications className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Log</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <AiFillSetting className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Settings</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item items mb-1 mt-2">USER</li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
              <CgProfile className="mt-0 side_icon" />
                <span className="sidebar_data"> Profile</span>
              </h6>
            </Link>
          </li>
          <li className="nav-item nav_items pt-1">
            <Link to="/" className="nav_link">
              <h6 className="pl-2">
                <FiLogOut className="mt-0 side_icon" />{" "}
                <span className="sidebar_data">Logout</span>
              </h6>
            </Link>
          </li>
          <p className="nav-item items mb-1 mt-2">THEME</p>
          <div className="d-flex pt-2">
            <button className="btn btn_light" onClick={()=> dispatch({type : "LIGHT"})}>L</button>
            <button className="btn btn-dark ml-3" onClick={()=> dispatch({type : "DARK"})} style={{borderRadius : 10}}>D</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
