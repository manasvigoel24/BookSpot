// import "./featuredproperties.css"

// const Featuredproperties = () => {
//     const {data,loading,error}=useFetch("http://localhost:8800/api/hotels?featured=true");
//   return (
//     <div className="fp">
//         <div className="fpItem">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1aFPyJg39xJ5Tu7UUMWz8gZsX0N0s0sWoWV_gVuaWvk3x_PTV-jO01fkx73A6WMxviU&usqp=CAU" alt="" className="fpImg" />
//         <span className="fpName">Aparthotel Stare Miasto</span>
//         <span className="fpCity">Madrid</span>
//         <span className="fpPrice">Starting from $120</span>
//         <div className="fpRating">
//             <button>8.9</button>
//             <span>Excellent</span>
//         </div>
//         </div>
//         <div className="fpItem">
        
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTFS8dxQ5lAAhoYGlrZUjwJR3sTmTvXLKdQ&s" alt="" className="fpImg" />
//         <span className="fpName">Aparthotel Stare Miasto</span>
//         <span className="fpCity">Madrid</span>
//         <span className="fpPrice">Starting from $120</span>
//         <div className="fpRating">
//             <button>8.9</button>
//             <span>Excellent</span>
    
//         </div>
//         </div>
//         <div className="fpItem">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTt2jRU1sZwmlBxOifEkXiyTCoUrQnl0l9QQ&s" alt="" className="fpImg" />
//         <span className="fpName">Aparthotel Stare Miasto</span>
//         <span className="fpCity">Madrid</span>
//         <span className="fpPrice">Starting from $120</span>
//         <div className="fpRating">
//             <button>8.9</button>
//             <span>Excellent</span>
//         </div>
//         </div>
//         <div className="fpItem">
//         <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/fortune/experience-fortune-hotels/Fortune-Select-JP-Cosmos.png" alt="" className="fpImg" />
//         <span className="fpName">Aparthotel Stare Miasto</span>
//         <span className="fpCity">Madrid</span>
//         <span className="fpPrice">Starting from $120</span>
//         <div className="fpRating">
//             <button>8.9</button>
//             <span>Excellent</span>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Featuredproperties

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;