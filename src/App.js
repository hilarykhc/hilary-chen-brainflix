import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import videoDetails from "../src/data/video-details.json";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Hero />
      </main>
    </body>
  );
}

export default App;
