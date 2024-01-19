import "./App.scss";
import { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import videoDetailsData from "../src/data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Hero />
        <div>
          <VideoDetails />
        </div>
      </main>
    </body>
  );
}

export default App;
