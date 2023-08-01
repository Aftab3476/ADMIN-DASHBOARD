import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { columData } from "../../TableSource";
import { rowData } from "../../TableSource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [deleteData, setDeleteData] = useState(rowData);
  const handleDelete =(id)=>{
    setDeleteData(deleteData.filter((item)=>(
      item.id !== id
    )))
  }
    const actionColum =[
        {field : "action", headerName: "Action", width: 200, renderCell :(params)=>{
            return(
                <div className="row justify-contnt-center ml-2">
                    <Link to="/users/test" className="btn btn_primary px-3">View</Link>
                    <button className="btn btn__primary ml-3" onClick={()=> handleDelete(params.row.id)}>Delete</button>
                </div>
            )
        }}
    ]
  return (
    <>
      <div className="shadow_sm p-3 mt-2">
        <div className="row justify-content-between px-4">
            <h4 className="new_user"><b>Add New User</b></h4>
            <Link to="/users/new" className="btn btn_primary px-4"><b>Add User</b></Link>
        </div>
      </div>
      <div className="mt-3 shadow_sm" style={{ height: 400, width: "100%" }}>
        <DataGrid 
          className="dataGrid"
          rows={deleteData}
          columns={columData.concat(actionColum)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10] }
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Datatable;
