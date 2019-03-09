import React from 'react';
import '../App.css'

const Parallax = (props) => {

    const style={
       
        /* The image used */
        backgroundImage: 'url(' + props.imgUrl + ')',
        
        /* Set a specific height */
        minHeight:props.minHeight, 
        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
          
        
    }

    return (
        <div style={style}>      
        
        </div>

    );
}

export default Parallax;