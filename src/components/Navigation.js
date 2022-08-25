import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
/* 2022-08-25
  react-router-dom 최신버전 History 변경됨.
*/

function Navigation(){
    return(
        <div className='nav'>
            <Link to="/home">Home</Link> <br/>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;