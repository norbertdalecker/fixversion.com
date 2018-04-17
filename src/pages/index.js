import React from "react";
import Link from "gatsby-link";
import "../assets/css/main.css";
import "../assets/css/navigation.css";

import "../assets/css/about.css";
import "../assets/css/contact.css";
import "../assets/css/works.css"
import "../assets/css/services.css";


import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Works from "../components/Works"

const IndexPage = () => (
  <div>
    <Header />
    <Services />
    <About />     
    <Works />

    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
