import React, { Component } from 'react';
import './404Page.css'

class Page404 extends Component {
  render() {

    return ( 
      <div id="error404">
        <div class="error404">
          <div class="bigerror">
            <h1>Oops!</h1>
          </div>
          <br></br>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <a href="/">GO TO HOMEPAGE</a>
        </div>
      </div>  
    )
  }    
}

export default Page404;