import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Main />   {/* aquí se renderiza Main */}
      <Footer />
    </div>
  );
}