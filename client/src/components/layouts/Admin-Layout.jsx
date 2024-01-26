import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <div className="admin-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
