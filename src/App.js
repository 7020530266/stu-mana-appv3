import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StudentE from "./StudentE";
import StudentV from "./StudentV";
import TeacherAct from "./TeacherAct";
import StudentACT from "./StudentACT";
import TeacherE from "./TeacherE";
import TeacherV from "./TeacherV";
import Welcome from "./Welcome";

function App() {
  return (
    <div >
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
          <div className="Route-Content1">
          <div className="Route-Content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/TeacherV" element={<TeacherV />} />
                <Route path="/StudentV" element={<StudentV />} />
                <Route path="/StudentE" element={<StudentE />} />
                <Route path="/StudentACT" element={<StudentACT />} />
                <Route path="/TeacherE" element={<TeacherE />} />
                <Route path="/TeacherAct" element={<TeacherAct />} />
                <Route path="/TeacherAct/:id" element={<TeacherAct />} />
                <Route path="/StudentACT/:id" element={<StudentACT />} />
              </Routes>
            </BrowserRouter>
          </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
