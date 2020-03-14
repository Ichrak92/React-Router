import React from 'react'
import { Link } from "react-router-dom";

 const  Nav =() =>{
    return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Nav;