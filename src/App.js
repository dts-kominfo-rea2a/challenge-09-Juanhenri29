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
        data1={contacts[0]}
        data2={contacts[1]}
        data3={contacts[2]}
        data4={contacts[3]}
        data5={contacts[4]}
        data6={contacts[5]}
      />
    </div>
  );
};

export default App;
