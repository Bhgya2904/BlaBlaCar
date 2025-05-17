import React from "react";
import { FaUser,FaCar,FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 shadow bg-black">
      <div className="d-flex align-items-center">
        <FaCar size={30} className="text-primary me-2 text-white" />
        <h3 className="m-0 text-primary text-white">BlaBlaCar</h3>
      </div>
      <div>
        <button className="btn btn-link text-decoration-none me-3 text-white"><FaSearch size={20} />Search</button>
        <button className="btn btn-link text-decoration-none text-white"><RxCrossCircled size={20} />Publish a ride</button>
        <button className="btn btn-link text-decoration-none text-white"><FaUser size={24} /></button>
      </div>
    </header>
  );
}