// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ name, email, phone, photo }) => {
  return (
    <div className="contact">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <img src={photo} alt="Foto Kucing"></img>
    </div>
  );
};

export default Contact;
