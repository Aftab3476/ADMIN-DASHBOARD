import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import MainHome from "../../Components/MainHome/MainHome";
import Featured from "../../Components/Feature/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";

const Home = () => {
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
            <div className="container-fluid pt-5">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-6 px-0">
                  <MainHome type="user" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 px-0">
                  <MainHome type="orders" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 px-0">
                  <MainHome type="earning" />
                </div>
                <div className="col-lg-3 col-md-4 col-6 px-0">
                  <MainHome type="balance" />
                </div>
              </div>

             {/* featured part and chart part */}
              <div className="row justify-content-center pt-5">
                <div className="col-lg-4 col-md-8 col-12">
                  <Featured/>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <Chart title="Last 6 Months (Revenue)"/>
                </div>
              </div>

              {/* table container */}
              <div className=" shadow_sm mt-4 p-2">
                  <h5>Latest Transctions...</h5>
                  <Table/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
