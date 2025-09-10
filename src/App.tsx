import { createContext } from "react";
import "./App.css";
import Compare from "./components/Compare";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import UpperSection from "./components/UpperSection";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export const MainContext = createContext<IMainContext>({
  text1: "",
  setText1: () => {},
  text2: "",
  setText2: () => {},
});

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <MainContext.Provider value={{ text1, setText1, text2, setText2 }}>
            <Compare />
            <UpperSection />
            <Inputs />
          </MainContext.Provider>
        </main>
      </div>
    </>
  );
}

export default App;
