import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home () {
  const [url, setUrl] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(url)
  }

  return (
    <div>
      <header className="header">
        <h1>Shortly</h1>
        <div className="links">
          <Link to={'/feature'} > Feature </Link>
          <Link to={'/pricing'} > Pricing </Link>
          <Link to={'/resources'} > Resources </Link>
        </div>
        <div className="links">
          <Link to={'/login'} > Login </Link>
          <Link to={'/signup'} > Sign Up </Link>
        </div>
      </header>

      <div className="body">
        <div>
          <h2>More than just shorter Links</h2>
          <div>Build your brand's recognition and get details insights on how your links are performing</div>
        </div>
        
        <form className="form" onSubmit={onSubmit} >
          <input required 
            type="url" 
            value={url}
            placeholder="Shorten a link here" 
            onChange={e => setUrl(e.target.value)} 
          />
          <button type="submit">Shorten It!</button>
        </form>

        <div className="shorter_box">
          <div className="shorter_link_holder">
            <span>kjdbosbd</span>
            <span>lksdnls <button>COPY</button></span>
          </div>
        </div>

      </div>

      <footer className="footer">
        <h1>Shortly</h1>
        <div className="links">
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

export default Home;