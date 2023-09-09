import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Home.css'

function Layout () {

  return (
    <div>
      <header className="header">
        <h1>Shortly</h1>
        <div className="links">
          <Link to={'/'} > Home </Link>
          <Link to={'/feature'} > Feature </Link>
          <Link to={'/pricing'} > Pricing </Link>
          <Link to={'/resources'} > Resources </Link>
        </div>
        <div className="links">
          <Link to={'/login'} > Login </Link>
          <Link to={'/signup'} > Sign Up </Link>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <h1>Shortly</h1>
        <div className="links">
          <Link to={'/'} > Home </Link>
          <Link to={'/feature'} > Feature </Link>
          <Link to={'/pricing'} > Pricing </Link>
          <Link to={'/resources'} > Resources </Link>
        </div>
        <div className="links">
          <Link to={'/login'} > Login </Link>
          <Link to={'/signup'} > Sign Up </Link>
        </div>
      </footer>

    </div>
  )
}

export default Layout;