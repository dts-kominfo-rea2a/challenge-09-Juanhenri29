// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ contacts }) => {
  return (
    <div className="contact">
      <img src={contacts[0].photo} alt="Foto Kucing"></img>
      <h3>{contacts[0].name}</h3>
      <p>{contacts[0].phone}</p>
      <p>{contacts[0].email}</p>
      <img src={contacts[1].photo} alt="Foto Kucing"></img>
      <h3>{contacts[1].name}</h3>
      <p>{contacts[1].phone}</p>
      <p>{contacts[1].email}</p>
      <img src={contacts[2].photo} alt="Foto Kucing"></img>
      <h3>{contacts[2].name}</h3>
      <p>{contacts[2].phone}</p>
      <p>{contacts[2].email}</p>
      <img src={contacts[3].photo} alt="Foto Kucing"></img>
      <h3>{contacts[3].name}</h3>
      <p>{contacts[3].phone}</p>
      <p>{contacts[3].email}</p>
      <img src={contacts[4].photo} alt="Foto Kucing"></img>
      <h3>{contacts[4].name}</h3>
      <p>{contacts[4].phone}</p>
      <p>{contacts[4].email}</p>
      <img src={contacts[5].photo} alt="Foto Kucing"></img>
      <h3>{contacts[5].name}</h3>
      <p>{contacts[5].phone}</p>
      <p>{contacts[5].email}</p>
    </div>
  );
};

export default Contact;
