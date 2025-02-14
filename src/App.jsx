import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Quiz from "./components/Quiz";
import HiddenNotes from "./components/HiddenNotes";
import MemoryStars from "./components/MemoryStars";
import FinalSurprise from "./components/FinalSurprise";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <Introduction />
      <Quiz />
      <HiddenNotes />
      <MemoryStars />
      <FinalSurprise />
      <Footer />
    </div>
  );
};

export default App;