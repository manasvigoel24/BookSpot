// import { Link } from "react-router-dom"
// import "./navbar.css"
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Navbar = () => {
//   const {user} = useContext(AuthContext);
//   return (
//     <div className="navbar">
//         <div className="navContainer">
//           <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
//             <span className="logo">BookSpot</span>
//             </Link>
//             {user ? user.username : (<div className="navItems">
//                 <button className="navButton">Register</button>
//                 <button className="navButton">Login</button>
//             </div>)}
//         </div>
//     </div>
//   )
// }

// export default Navbar

// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// const Navbar = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">lamabooking</span>
//         </Link>
//         {user ? user.username : (
//           <div className="navItems">
//             <button className="navButton">Register</button>
//             <button className="navButton">Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Navbar = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">lamabooking</span>
//         </Link>
//         {/* {/* {user ? (
//           <span>{user.username}</span>
//         ) : (  */}
//           <div className="navItems">
//             <Link to="/register">
//               <button className="navButton">Register</button>
//             </Link>
//             <Link to="/login">
//               <button className="navButton">Login</button>
//             </Link>
//           </div>
      
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css"
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
         <span className="logo">BookSpot</span>
        </Link>
        <div className="navItems">
          {user ? (
            <span>{user.username}</span>
          ) : (
            <>
              <Link to="/register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

