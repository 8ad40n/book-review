import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div className="container mx-auto px-4 md:px-16">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
