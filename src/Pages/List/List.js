import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Datatable from "../../Components/Datatable/Datatable";

const List = () => {
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
            <div className="p-2">
              <Datatable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
