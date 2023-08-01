import Images from "./assets/camera.jpeg";

export const columData = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "user", headerName: "User", width: 240, renderCell : (params)=>{
        return(
            <div className="d-flex">
                <img src={params.row.img} className="img_fluid2" alt="avtar" />
                <h6 className="pt-2 pl-2" >{params.row.userName}</h6>
            </div>
        )
    } },
    {field: "email", headerName: "Email Id", width: 240 },
    {field: "age", headerName: "Age", width: 80 },
    {field: "status", headerName: "Status", width: 110, renderCell : (params)=>{
        return (
            <div className={`status1 ${params.row.status}`}>{params.row.status}</div>
        )
    } },
];

export const rowData = [
  { id: 1, userName: "Snow Jon", img: Images, age: 35, status : "passive", email : "useremail123@gmail.com" },
  { id: 2, userName: "Lannister Cersei", img: Images, age: 42, status : "active", email : "useremail123@gmail.com" },
  { id: 3, userName: "Lannister Jaime", img: Images, age: 45, status : "passive", email : "useremail123@gmail.com" },
  { id: 4, userName: "Stark Arya", img: Images, age: 16, status : "pending", email : "useremail123@gmail.com" },
  {
    id: 5,
    userName: "Targaryen Daenerys",
    img: Images,
        age: 45, status : "active", email : "useremail123@gmail.com",
  },
  { id: 6, userName: "Melisandre mio", img: Images, age: 50, status : "active", email : "useremail123@gmail.com" },
  { id: 7, userName: "Clifford Ferrara", img: Images, age: 44, status : "pending", email : "useremail123@gmail.com" },
  { id: 8, userName: "Frances Rossini", img: Images, age: 36, status : "passive", email : "useremail123@gmail.com" },
  { id: 9, userName: "Roxie Harvey", img: Images, age: 65, status : "active", email : "useremail123@gmail.com" },
];
