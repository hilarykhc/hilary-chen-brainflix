import "./App.scss";
import { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import videoDetailsData from "../src/data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Hero />
        <div className="div-container">
          <div className="div-container2">
            <VideoDetails />
            <Comments />
          </div>
          <div>
            <VideoList />
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
