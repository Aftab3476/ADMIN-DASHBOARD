import React from "react";
import "./Single.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import Chart from "../../Components/Chart/Chart";
import Aftab from "../../assets/AFTAB.jpg";

const Single = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center col_reverse">
          <div className="col-lg-3 col-md-8 col-12 px-0">
            <div className="">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12 px-0">
            <Navbar />
            <div className="container-fluid">
              <div className="p-2 mt-3">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-7 col-12">
                    <div className=" shadow_sm py-2 px-3">
                      <div className="row justify-content-end">
                        <button className="btn btn_primary py-0 mr-3 mt-2">
                          Edit
                        </button>
                      </div>
                      <h5 className="pt-1" style={{ color: "gray" }}>Information</h5>
                      <div className="text-center pt-2">
                        <img src={Aftab} className="img_Aftab" alt="avatar" />
                        <h4 className="pt-2" style={{ color: "gray" }}>
                          <b>Md Aftab Alam</b>
                        </h4>
                        <h6>
                          {" "}
                          <b>Email :- </b>{" "}
                          <span>coderaftab092@gmail.com</span>
                        </h6>
                        <h6 className="">
                          <b>Phone :- </b>
                          <span>6207488382</span>
                        </h6>
                        <h6 className="mb-1">
                          <b>Address :-</b>{" "}
                          <span>Jafribagh Purnia City Purnia 854302</span>
                        </h6>
                        <h6 className="pt-0">
                          <b>State :-</b> <span>Bihar</span>
                        </h6>
                        <h6 className="pt-0">
                          <b>Country :-</b> <span>India</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 col-12">
                    <Chart title="User Spending (Last 6 Months)" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow_sm mt-4 mx-4">
              <div className="shadow_sm p-3">

              <h5 style={{color : "gray"}}><b>Last Transction...</b></h5>
              <Table/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
