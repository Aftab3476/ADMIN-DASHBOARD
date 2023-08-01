import React from "react";
import "./Table.css";
import Laptop from "../../assets/download.jpeg";

const Table = () => {
  const row = [
    {
      id: 1235656,
      product: "Acer Nitro 5",
      img: Laptop,
      customer: "John Smith",
      date: "1 August",
      amount: 799,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 5752245,
      product: "Playstation 5",
      img: Laptop,
      customer: "Sohel khan",
      date: "14 August",
      amount: 899,
      method: "Online Payment",
      status: "Pending",
    },

    {
      id: 1123556,
      product: "Playstation 5",
      img: Laptop,
      customer: "Sohel khan",
      date: "28 July",
      amount: 1099,
      method: "Cash on Delivery",
      status: "Pending",
    },

    {
      id: 4456465,
      product: "Gaming Laptop",
      img: Laptop,
      customer: "Sohel khan",
      date: "30 July",
      amount: 1199,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 1365478,
      product: "Gaming Laptop",
      img: Laptop,
      customer: "Sohel khan",
      date: "19 July",
      amount: 1299,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];
  return (
    <>
      <table className="table table-hover mt-3">
        <thead className="thead-dark">
          <tr>
            <th style={{ color: "#fff" }}>Tracking ID</th>
            <th style={{ color: "#fff" }}>Product</th>
            <th style={{ color: "#fff" }}>Customer</th>
            <th style={{ color: "#fff" }}>Date</th>
            <th style={{ color: "#fff" }}>Amount</th>
            <th style={{ color: "#fff" }}>Payment Method</th>
            <th style={{ color: "#fff" }}>Status </th>
          </tr>
        </thead>
        <tbody>
          {row.map((data, ind) => (
            <tr key={ind}>
              <th scope="row" style={{ color: "gray", paddingTop: 19 }}>
                {data.id}
              </th>
              <td style={{ color: "gray" }}>
                <div className="d-flex">
                  <img
                    src={data.img}
                    className="img_fluid1 p-1 mr-2"
                    alt="logo"
                  />
                  <span className="pt-2">{data.product}</span>
                </div>
              </td>
              <td style={{ color: "gray", paddingTop: 19 }}>{data.customer}</td>
              <td style={{ color: "gray", paddingTop: 19 }}>{data.date}</td>
              <td style={{ color: "gray", paddingTop: 19 }}>{data.amount}</td>
              <td style={{ color: "gray", paddingTop: 19 }}>{data.method}</td>
              <td style={{ color: "gray", paddingTop: 19 }}>
                <span className={`status ${data.status}`}>{data.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
