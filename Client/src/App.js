import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
