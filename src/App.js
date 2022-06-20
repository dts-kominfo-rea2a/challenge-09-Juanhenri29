import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact
        name={contacts[0].name}
        email={contacts[0].email}
        phone={contacts[0].phone}
        photo={contacts[0].photo}
      />
      <Contact
        name={contacts[1].name}
        email={contacts[1].email}
        phone={contacts[1].phone}
        photo={contacts[1].photo}
      />
      <Contact
        name={contacts[2].name}
        email={contacts[2].email}
        phone={contacts[2].phone}
        photo={contacts[2].photo}
      />
      <Contact
        name={contacts[3].name}
        email={contacts[3].email}
        phone={contacts[3].phone}
        photo={contacts[3].photo}
      />
      <Contact
        name={contacts[4].name}
        email={contacts[4].email}
        phone={contacts[4].phone}
        photo={contacts[4].photo}
      />
      <Contact
        name={contacts[5].name}
        email={contacts[5].email}
        phone={contacts[5].phone}
        photo={contacts[5].photo}
      />
    </div>
  );
};

export default App;
