import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {
  const {data,loading,error}=useFetch("http://localhost:8800/api/hotels/countByCity?cities=mumbai,kerela,bengaluru")


  return (
    <div className="featured">
       {loading? "Loading please wait":(
        <>
        <div className="featuredItem">
        <img src="https://images.moneycontrol.com/static-mcnews/2022/12/Mumbai-770x433.jpg?impolicy=website&width=770&height=431" ></img>
        <div className="featuredTitles">
            <h2>Mumbai</h2>
            <h2>{data[0]} properties</h2>
        </div>
        </div>

        <div className="featuredItem">
        <img src="https://static.toiimg.com/thumb/msid-89747605,width-748,height-499,resizemode=4,imgsize-206002/.jpg" ></img>
        <div className="featuredTitles">
            <h2>Kerela</h2>
            <h2>{data[1]} properties</h2>
        </div>
        </div>

        <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="></img>
        <div className="featuredTitles">
            <h2>Bengaluru</h2>
            <h2>{data[2]} properties</h2>
        </div>
          </div></>) }
    </div>
  )
}

export default Featured