import React from "react";
import "./Featured.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <>
      <div className="card_feature">
        <div className="row justify-content-between px-4 py-2">
          <h4 style={{ color: "gray" }}>
            <b>Total Revenue</b>
          </h4>
          <BsThreeDotsVertical className="mt-2" />
        </div>
        <div className="row justify-content-center">
          <div className="pro_gress">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={10} />
          </div>
        </div>
        <div className="pb-2">
          <h5 className="text-center pt-3" style={{ color: "gray" }}>
            Total sales made today
          </h5>
          <h3 className="text-center py-1">$420</h3>
          <p className="dess py-0 mb-0">
            Previous transaction processing. Last payment may not be included.
          </p>
        </div>
        <div className="row justify-content-center pb-2 mt-0">
          <div className="col-4 text-center">
            <h6 style={{color : "gray", fontSize : '14px'}} >Target</h6>
            <h6 style={{color : 'red'}}>$12.4k</h6>
          </div>
          <div className="col-4 text-center">
            <h6 style={{color : "gray", fontSize : '14px'}} >Last Week</h6>
            <h6 style={{color : 'gray'}}>$12.4k</h6>
          </div>
          <div className="col-4">
            <h6 style={{color : "gray", fontSize : '14px'}} >Last Months</h6>
            <h6 style={{color : 'gray'}}>$12.4k</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
