// import "./header.css"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faHouse, faPerson} from "@fortawesome/free-solid-svg-icons"
// import {faStar} from "@fortawesome/free-solid-svg-icons"
// import {faPhone} from "@fortawesome/free-solid-svg-icons"
// import {faCircleInfo} from "@fortawesome/free-solid-svg-icons"
// import {faBed} from "@fortawesome/free-solid-svg-icons"
// import {faCalendarDays}  from "@fortawesome/free-solid-svg-icons"
// import {DateRange} from 'react-date-range';
// import { useState } from "react"
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css';
// import {format} from "date-fns"
// import { useNavigate } from "react-router-dom"
// import { Link } from 'react-scroll';


// const Header = ({type}) => {
//     const[destination,setDestination]=useState("")
//     const[openDate,setOpenDate]=useState(false);
//     const[date,setDate]=useState([
//         {startDate:new Date(),
//         endDate:new Date(),
//         key: 'selection'
//     }
//     ]);
//     const[openOptions,setOpenOptions]=useState(false);
//     const[options,setOptions]=useState({
//         adult:1,
//         children:0,
//         room:1,
//     });
//     const navigate=useNavigate()
//     const handleOption=(name,operation)=>{
//         setOptions((prev)=>{
//             return{
//             ...prev,
//             [name]:operation==="i" ? options[name]+1:options[name]-1,
//         };
//     });
//     };
//     const handleSearch=()=>{
//     navigate("/hotels",{state:{destination,date,options}});
//     };
//   return (
//     <div className={type==="list" ? "header listM":"header"}>
//         <div className={type==="list" ? "headerContainer listMode":"headerContainer"}>
//         <div className="headerList">
//             <div className="headerListItem">
//             <FontAwesomeIcon icon={faHouse} />
//                 <span><Link to='header' smooth={true} offset={0} duration={500} activeClass="active" className="link">Home</Link> </span>
//             </div>
//             <div className="headerListItem">
//             <FontAwesomeIcon icon={faCircleInfo} />
//                 <span><Link to='pList' smooth={true} offset={-80} duration={600} activeClass="active" className="link">Explore</Link></span>
//             </div>
//             <div className="headerListItem">
//             <FontAwesomeIcon icon={faStar} />
//                 <span><Link to='testimonials' smooth={true} offset={-80} duration={700}>Reviews</Link></span>
//             </div>
//             <div className="headerListItem">
//             <FontAwesomeIcon icon={faPhone} />
//                 <span><Link to='mail' smooth={true} offset={-50} duration={700}>Contact us</Link></span>
//             </div>
//         </div>
//         {type !=="list" && 
//         <>
//         <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
//         <p className="headerDesc">
//             Get rewarded for your travels-unlock instant savings of 10% or more with a free Bookspot account
//         </p>
//         <button className="headerBtn">Sign in/Register</button>
//         <div className="headerSearch">
//             <div className="headerSearchItem">
//             <FontAwesomeIcon icon={faBed} className="headerIcon" />
//             <input type='text' placeholder="Where are you going?" className="headerSearchInput"
//             onChange={e=>setDestination(e.target.value)}/>
//             </div>
//             <div className="headerSearchItem">
//             <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
//            {openDate && ( <DateRange
//             editableDateInputs={true}
//             onChange={item => setDate([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={date}
//             className="date"
//             minDate={new Date()}
//             />)}
//             </div>
//             <div className="headerSearchItem">
//             <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//             <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult .  ${options.children} children .  ${options.room} room `}</span>
//             {openOptions && <div className="options">
//                 <div className="optionItem">
//                     <span className="optionText">Adult</span>
//                     <div className="optionCounter">
//                     <button
//                     disabled={options.adult<=1} 
//                     className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
//                     <span className="optionCounterNumber">{options.adult}</span>
//                     <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
//                 </div>
//                 </div>
//                 <div className="optionItem">
//                     <span className="optionText">Children</span>
//                     <div className="optionCounter">
//                     <button
//                     disabled={options.children<=0}  className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
//                     <span className="optionCounterNumber">{options.children}</span>
//                     <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
//                 </div>
//                 </div>
//                 <div className="optionItem">
//                     <span className="optionText">Room</span>
//                     <div className="optionCounter">
//                     <button 
//                     disabled={options.room<=1}
//                     className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
//                     <span className="optionCounterNumber">{options.room}</span>
//                     <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
//                 </div>
//                 </div> 
//             </div>}
//             </div>
//             <div className="headerSearchItem">
//             <button className="headerbtn" onClick={handleSearch}>Search</button>
//             </div>

//         </div></>}
//         </div>
//     </div>
//   )
// }

// export default Header



import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPerson, faStar, faPhone, faCircleInfo, faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { useContext, useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>200?setSticky(true):setSticky(false);
        })
    },[]);
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const {dispatch}=useContext(SearchContext)
    const handleSearch = () => {
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate("/hotels", { state: { destination, dates, options } });
    };
    
    return (
        <div className={type === "list" ? "header listM" : "header"}>
            <div className= "headerContainer">
                <div className={`headerList ${sticky?'dark-head' : ''}`}>
                    <div className="headerListItem">
                        <Link
                            to='header'
                            smooth={true}
                            offset={0}
                            duration={500}
                            activeClass="active"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <Link
                            to='pList'
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass="active"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span>Explore</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <Link
                            to='testimonials'
                            smooth={true}
                            offset={-170}
                            duration={600}
                            activeClass="active"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faStar} />
                            <span>Reviews</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <Link
                            to='mail'
                            smooth={true}
                            offset={-150}
                            duration={700}
                            activeClass="active"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Contact us</span>
                        </Link>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels-unlock instant savings of 10% or more with a free Bookspot account
                        </p>
                        {!user && <button className="headerBtn">Sign in/Register</button>}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type='text'
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                                    {`${options.adult} adult . ${options.children} children . ${options.room} room `}
                                </span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.children <= 0}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerbtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
}

export default Header;
