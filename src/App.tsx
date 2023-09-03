import Navbar from "./components/navbar";
import Content from "./components/content"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Content/>} />
      </Routes>

      
    </>
  )
}

export default App
