import useFetch from "../../hooks/useFetch"
import "./propertyList.css"

const PropertyList = () => {

    const {data,loading,error}=useFetch("http://localhost:8800/api/hotels/countByType");
     const images=[
        "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        "https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg",
        "https://media.cntraveler.com/photos/5e5e9a3617b1dc0008f2fbfe/4:3/w_2664,h_1998,c_limit/EauPalmBeachResort&Spa-PalmBeachFlorida-2020-5.jpg",
        "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg",
        "https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000"

     ]
  return (
    
    <div className="pList">
        {loading ?("loading"):(
            <>
            {data && images.map((img,i)=>(<div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>))}
        </>)}
    </div>
  )
}

export default PropertyList