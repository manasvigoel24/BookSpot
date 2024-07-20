import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null,
};

export const AuthContext=createContext(INITIAL_STATE)

const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
          return {
            user:null,
            loading:true,
            error:null,
          }    
          case "LOGIN_SUCCESS":
            return {
              user:action.payload,
              loading:false,
              error:null,
                } 
          case "LOGIN_FAILURE":
            return {
              user:null,
              loading:false,
              error:action.payload,
            }    
            case "LOGOUT":
            return {
              user:null,
              loading:false,
              error:null,
            };   
          default:
            return state;    

    }
};

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
return(
    <AuthContext.Provider value={{
    user:state.user,
    loading:state.loading,
    error:state.error,
    dispatch,
    }}
    >
        {children}
    </AuthContext.Provider>
);
};

// import React, { createContext, useEffect, useReducer } from "react";
// import axios from "axios";

// // Initial state for authentication
// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   loading: false,
//   error: null,
// };

// // Create context for authentication
// export const AuthContext = createContext(INITIAL_STATE);

// // Reducer function to manage state transitions
// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         user: action.payload.user,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         user: null,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// // AuthContextProvider component to provide state and actions
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   // Effect to store user in localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//   }, [state.user]);

//   // Login function to authenticate user
//   const handleLogin = async (username, password) => {
//     dispatch({ type: "LOGIN_START" });

//     try {
//       const response = await axios.post('http://localhost:8800/api/login', { username, password });
//       const { access_token, userId, otherDetails } = response.data;

//       // Store token and userId in localStorage
//       localStorage.setItem('access_token', access_token);
//       localStorage.setItem('userId', userId);

//       // Dispatch login success action with user data
//       dispatch({ type: "LOGIN_SUCCESS", payload: { user: { userId, otherDetails } } });
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Dispatch login failure action with error message
//       dispatch({ type: "LOGIN_FAILURE", payload: error.message });
//     }
//   };

//   // Logout function to clear user data
//   const handleLogout = () => {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('userId');
//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         loading: state.loading,
//         error: state.error,
//         handleLogin,
//         handleLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
