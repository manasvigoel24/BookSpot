// import { useEffect, useState } from "react"
// import axios from "axios";

// const useFetch=(url)=>{
//     const[data,setData]=useState([])
//     const[loading,setLoading]=useState(false)
//     const[error,setError]=useState(false)

//     useEffect(()=>{
//         const fetchData=async ()=>{
//             setLoading(true)
//             try{

//                 const res=await axios.get(url);
//                 setData(res.data);
//             }catch(err){
//                 setError(err);
//             }
//             setLoading(false)
//         };
//         fetchData();
//     },[url]);


// const refetch=async ()=>{
//     setLoading(true)
//     try{

//         const res=await axios.get(url);
//         setData(res.data);
//     }catch(err){
//         setError(err)
//     }
//     setLoading(false);
// };

// return {data,loading,error,refetch};
// };

// export default useFetch;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(url);
//         setData(res.data);
//       } catch (err) {
//         setError(err);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   const reFetch = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(url);
//       setData(res.data);
//     } catch (err) {
//       setError(err);
//     }
//     setLoading(false);
//   };

//   return { data, loading, error, reFetch };
// };

// export default useFetch;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url, token) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         console.log("Fetching data from:", url);
//         console.log("Using token:", token);
//         const res = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(res.data);
//       } catch (err) {
//         setError(err);
//         console.error("Error fetching data:", err);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url, token]);

//   const refetch = async () => {
//     setLoading(true);
//     try {
//       console.log("Refetching data from:", url);
//       console.log("Using token:", token);
//       const res = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setData(res.data);
//     } catch (err) {
//       setError(err);
//       console.error("Error refetching data:", err);
//     }
//     setLoading(false);
//   };

//   return { data, loading, error, refetch };
// };

// export default useFetch;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       try {
//         const res = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(res.data);
//       } catch (err) {
//         setError(err);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   const refetch = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("access_token");
//     try {
//       const res = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setData(res.data);
//     } catch (err) {
//       setError(err);
//     }
//     setLoading(false);
//   };

//   return { data, loading, error, refetch };
// };

// export default useFetch;

import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true; // Ensure this is set globally

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          withCredentials: true, // Include cookies with the request
        });
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, {
        withCredentials: true, // Include cookies with the request
      });
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
