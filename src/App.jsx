import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./pages/firstPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
