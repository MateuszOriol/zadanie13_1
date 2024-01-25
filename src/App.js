import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
    return <div>Nie znaleziono elementu: {location.pathname}</div>;
};
const Home = () => <div>Strona główna</div>;
const About = () => <div>O nas</div>;
const Services = () => <div>Usługi</div>;
const Contact = () => <div>Kontakt</div>;
const ContactUs = () => <div>Kontakt (US)</div>;
const ContactPl = () => <div>Kontakt (PL)</div>;
const ContactDe = () => <div>Kontakt (DE)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/us" element={<ContactUs />} />
        <Route path="/contact/pl" element={<ContactPl />} />
        <Route path="/contact/de" element={<ContactDe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
