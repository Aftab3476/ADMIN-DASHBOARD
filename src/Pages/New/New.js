import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Camera from "../../assets/camera.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TextField } from "@mui/material";
import "./New.css";

const New = ({ title, inputs }) => {
  const [file, setFile] = useState("");
  console.log(file)
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
            <div className="mx-3 mt-3">
              <div className="shadow_sm p-3">
                <h3 style={{ color: "lightgray" }}>{title}</h3>
              </div>
              <div className="shadow_sm p-3 mt-1">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-8 col-12">
                    <div className="aaaaa">
                      <img src={file ? URL.createObjectURL(file) : Camera} className="imgFluid" alt="avatar" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                      <form action="">
                        <div className="row justify-content-between px-5">
                          <div className="form-group pl-4 pt-1">
                            <h5 className="pt-4 mb-0 la_bel ">
                              <label htmlFor="file">Image:{" "}
                              <FaCloudUploadAlt style={{ cursor: "pointer" }} /></label>
                              <input type="file" id="file" onChange={(e)=> setFile(e.target.files[0])}  style={{display : 'none'}}/>
                            </h5>
                          </div>

                          {inputs.map((data) => (
                            <div className="col-6" key={data.id}>
                              <div className="form-group">
                                <TextField required id={data.id} type={data.type} label={data.label}variant={data.variant} className="form-control mt-2 text_Field" InputLabelProps={{className : 'text_Field'}} />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center pt-4">
                          <button className="btn btn_primary1 py-1 px-5">
                            Send
                          </button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
