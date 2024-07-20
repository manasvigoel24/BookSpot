// import { useContext, useState } from "react"
// import "./login.css"
// import { AuthContext } from "../../context/AuthContext.jsx"
// import axios from "axios"

// const Login = () => {
//     const [credentials,setCredentials]=useState({
//         username:undefined,
//         password:undefined,
//     })
//     const {user,loading,error,dispatch}=useContext(AuthContext);

//     const handleChange= (e)=>{
//         setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
//     };

//     // const handleClick=async e=>{
//     //     e.preventDefault();
//     //     dispatch({type:"LOGIN_START"})
//     //     try{
//     //       const res=await axios.post(`http://localhost:8800/api/auth/login`,credentials);
//     //       dispatch({type:"LOGIN_SUCCESS",payload:res.data});
//     //     }catch(err){
//     //         dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
//     //     }
//     // };

//     const handleClick = async (e) => {
//       e.preventDefault();
//       dispatch({ type: "LOGIN_START" });
//       try {
//         const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//         navigate("/")
//       } catch (err) {
//         dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//       }
//     };
//     console.log(user);
//   return (
//   <div className="login">
//     <div className="lContainer">
//         <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
//         <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
//         <button onClick={handleClick} className="lButton">Login</button>
//         {error && <span>{error.message}</span>}
//     </div>
//   </div>
//   );
// };

// export default Login

// import { useContext, useState } from "react";
// import "./login.css";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import axios from "axios";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined,
//   });
//   const { user, loading, error, dispatch } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//       // Assuming you have a navigation method like navigate("/")
//     } catch (err) {
//       if (err.response) {
//         // Request made and server responded with an error status code
//         dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//         console.error("Error response data:", err.response.data);
//       } else if (err.request) {
//         // The request was made but no response was received
//         console.error("No response received:", err.request);
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error("Error setting up request:", err.message);
//       }
//     }
//   };

//   console.log(user);

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;


// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined,
//   });

//   const {user,loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//       navigate("/")
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };
//   console.log(user);

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});

      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <span className="error-message">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
