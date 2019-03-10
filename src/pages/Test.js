import React, { Component } from 'react';
import QuoteBlock from '../components/QuoteBlock'
import HomeIcon from '@material-ui/icons/FormatQuote';


class Test extends Component {
  render() {

    const qtStyle = {
      position: 'center',
      top: '0'
    }




    return ( 
      <div className={qtStyle}>
        <HomeIcon  />
      </div>  
    )
  }    
}

export default Test;