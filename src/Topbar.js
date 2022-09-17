import  React  from "react";
import "./Topbar.css";
import { FcBusinessman } from "react-icons/fc";

export default function Topbar(){

return (
    <div id="content">

                 {/* Topbar */} 
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  <div className="title mx-auto">
                  <div><h1>Student And Teacher Management Portal</h1>
                  </div></div>
                    
                  <div className ="student_logo" >
                  <div>
                  <FcBusinessman size ='4rem' />
                  </div>      
                  </div>
                 
                </nav>
            </div>
)

};