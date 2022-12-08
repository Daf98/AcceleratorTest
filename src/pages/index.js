import React from "react";
import Navbar from "../components/navbar";
import Splash from "../components/splash";
import Cookies from "../components/cookies";
import Rainbow from "../components/rainbow";
import Card from "../components/card";
import Features from "../components/features";
import Clients from "../components/clients";
import Footer from "../components/footer";
import "./index.module.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <Splash />
      <Cookies />
      <Rainbow />
      <Card />
      <Features />
      <Clients />
      <Footer />
    </>
  );
};
export const Head = () => <title>Home Page</title>;

export default Index;
