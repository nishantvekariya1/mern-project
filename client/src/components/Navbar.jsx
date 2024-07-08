import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">
            <span>CRUD - Mern Website</span>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
