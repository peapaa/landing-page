import React from "react";
import Header from "./components/Header";
import TravelTop from "./components/TravelTop";

const App: React.FC = () => {
  return (
    <div className="w-full font-roboto">
      <div className="w-full h-auto bg-gradient-to-br from-rose-50 via-white to-rose-50 ">
        <Header />
        <TravelTop />
      </div>
    </div>
  );
};

export default App;
