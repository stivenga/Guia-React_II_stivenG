import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ options }) => {
  return (
    <div>
      <header>
        <nav>
          {options.map((option) => (
            <Link key={option.title} to={option.to}>
              {option.title}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Layout;
