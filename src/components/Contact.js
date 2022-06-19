// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ props }) => {
  return (
    <div className="contact">
      <img src={props[0].photo} alt="Foto Kucing"></img>
      <h3>{props[0].name}</h3>
      <p>{props[0].phone}</p>
      <p>{props[0].email}</p>
      <img src={props[1].photo} alt="Foto Kucing"></img>
      <h3>{props[1].name}</h3>
      <p>{props[1].phone}</p>
      <p>{props[1].email}</p>
      <img src={props[2].photo} alt="Foto Kucing"></img>
      <h3>{props[2].name}</h3>
      <p>{props[2].phone}</p>
      <p>{props[2].email}</p>
      <img src={props[3].photo} alt="Foto Kucing"></img>
      <h3>{props[3].name}</h3>
      <p>{props[3].phone}</p>
      <p>{props[3].email}</p>
      <img src={props[4].photo} alt="Foto Kucing"></img>
      <h3>{props[4].name}</h3>
      <p>{props[4].phone}</p>
      <p>{props[4].email}</p>
      <img src={props[5].photo} alt="Foto Kucing"></img>
      <h3>{props[5].name}</h3>
      <p>{props[5].phone}</p>
      <p>{props[5].email}</p>
    </div>
  );
};

export default Contact;
