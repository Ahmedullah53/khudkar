import React from "react";
import Nav from "./components/nav/nav";
import Banner from "./components/banner";
import Section from "./components/section";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Banner title="KHUDKAR" subText="Automate everything" />
      <Section />
      <Footer />
    </div>
  );
}

