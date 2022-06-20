// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data1, data2, data3, data4, data5, data6 }) => {
  return (
    <div className="contact">
      <img src={data1.photo} alt="Foto Kucing"></img>
      <h3>{data1.name}</h3>
      <p>{data1.phone}</p>
      <p>{data1.email}</p>
      <img src={data2.photo} alt="Foto Kucing"></img>
      <h3>{data2.name}</h3>
      <p>{data2.phone}</p>
      <p>{data2.email}</p>
      <img src={data3.photo} alt="Foto Kucing"></img>
      <h3>{data3.name}</h3>
      <p>{data3.phone}</p>
      <p>{data3.email}</p>
      <img src={data4.photo} alt="Foto Kucing"></img>
      <h3>{data4.name}</h3>
      <p>{data4.phone}</p>
      <p>{data4.email}</p>
      <img src={data5.photo} alt="Foto Kucing"></img>
      <h3>{data5.name}</h3>
      <p>{data5.phone}</p>
      <p>{data5.email}</p>
      <img src={data6.photo} alt="Foto Kucing"></img>
      <h3>{data6.name}</h3>
      <p>{data6.phone}</p>
      <p>{data6.email}</p>
    </div>
  );
};

export default Contact;
