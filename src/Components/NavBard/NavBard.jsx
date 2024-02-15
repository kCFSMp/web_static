import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



export default function NavBard() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    
    <nav className="navbar navbar-expand-lg rounded" aria-label="Thirteenth navbar example"  style={{backgroundColor: "transparent", borderBottom: "1px solid rgba(0, 0, 0, 0.1)", position: "fixed", width:"100%", top: "0",left: "0", zIndex: "100", margin:"3vh 0", padding: " 0 2vh"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse d-lg-flex" + (isOpen ? " show" : "")} id="navbarsExample11">
          <Link className="navbar-brand col-lg-3 me-0" to="/" style={{color:"#fff", fontWeight:"600"}}>PUNE</Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Information" style={{color:"#fff"}}>Information</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About" style={{color:"#fff"}}>About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Culture" style={{color:"#fff"}}>Culture</Link>
            </li>
          </ul>
          
          <form className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button className="btn btn-outline-success" type="submit" style={{backgroundColor: "transparent", border: "none", color: "#fff"}}>
            <FontAwesomeIcon icon={faSearch} />
            &nbsp; &nbsp; Search
              </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
