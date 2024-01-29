import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { createContext, useState } from "react";

export const CommentsCountContext = createContext();

export default function App() {
  const [commentsCount, setCommentsCount] = useState(0);

  return (
    <CommentsCountContext.Provider value={{ commentsCount, setCommentsCount }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </CommentsCountContext.Provider>
  );
}
