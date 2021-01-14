import React from 'react';
import {Link} from 'react-router-dom';

function Header () {
   return (
      <div className="Header">
         <h2>NiceToMeetMe</h2>
         <Link to="/"> {`< Back to Conference Room`} </Link>
      </div>
   )
}

export default Header;