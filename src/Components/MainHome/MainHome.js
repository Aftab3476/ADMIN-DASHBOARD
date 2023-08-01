import React from "react";
import "./MainHome.css";
import { LiaAngleUpSolid, LiaWalletSolid } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";
import { AiFillDollarCircle, AiOutlineShoppingCart } from "react-icons/ai";

const MainHome = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        money: false,
        nav__link: "See all users",
        user: <FaUserAlt className="user" style={{color : "crimson", backgroundColor : "rgba(255,0,0,0.2)"}} />,
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        money: false,
        nav__link: "View all orders",
        user: <AiOutlineShoppingCart className="user" style={{color : "goldenrod", backgroundColor : "rgba(218,165,32,0.2)"}} />,
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        money: true,
        nav__link: "View net earnings",
        user: <AiFillDollarCircle className="user" style={{color : "purple", backgroundColor : "rgba(128,0,128,0.2)"}} />,
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        money: true,
        nav__link: "See deatils",
        user: <LiaWalletSolid className="user" style={{color : "crimson", backgroundColor : "rgba(255,0,0,0.2)"}} />,
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="px-4 py-2 shadow_sm">
            <div className="row justify-content-between">
              <div>
                <h6 className="title">
                  <b style={{color : "gray"}}>{data.title}</b>
                </h6>
                <h3 className="money">
                  {data.money && "$"} {amount}
                </h3>
                <a href="#" className="nav__link">
                  {data.nav__link}
                </a>
              </div>
              <div>
                <h6>
                  <LiaAngleUpSolid style={{ fontSize: "20px" }} /> {diff}
                </h6>
                {data.user}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
