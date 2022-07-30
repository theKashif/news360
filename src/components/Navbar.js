import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  return (
    <>
      <nav className=' d-flex justify-content-center navbar navbar-expand navbar-light bg-warning fixed-top navshadow navheight'>
        <div className=''>
          <div className="container-fluid d-flex justify-content-center mt-0 my-0">
            <Link className="navbar-brand mt-0" to="/"><button className='btn btn-dark'><h5>News360</h5></button></Link>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="co-sm-3"></div>
              <div className="co-sm-6">

                <div className="collapse navbar-collapse d-flex justify-content-center mt-0 my-0" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                  </ul>
                </div>

              </div>
              <div className="co-sm-3"></div>
            </div>
          </div>
        </div>
      </nav>


      {/* <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div> */}


    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  aboutus: PropTypes.string
}

Navbar.defaultProps = {
  title: 'title here',
  aboutus: 'aboutus here',
  home: 'home here'
}
