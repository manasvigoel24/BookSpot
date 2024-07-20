import "./reviews.css"
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from "react"


const Reviews = () => {
     const slider=useRef();
     let tx=0;

  const slideForward=()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Evelyn Jackson</h3>
                  <span>Sydney,Australia</span>
                </div>
              </div>
              <p> "We had an amazing time at the hotel. The room was spotless and the staff were extremely friendly and helpful. The location was perfect, close to all the main attractions. Will definitely come back!" </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohit Singh</h3>
                  <span>Punjab,India</span>
                </div>
              </div>
              <p>"The hotel offered great value for the price. The breakfast was delicious and the room was comfortable. However, the Wi-Fi was a bit slow. Overall, a pleasant experience."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mahi Sharma</h3>
                  <span>Mumbai,India</span>
                </div>
              </div>
              <p> We have had 3 wonderful trips with tons of new memories for me and my family. I understand that these properties are just being hosted on your website, but I will say that having the opportunity to rent a vacation home in any state anywhere you desire is wonderful. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jeffrey Jackson</h3>
                  <span>New York,USA</span>
                </div>
              </div>
              <p>It's a very nice place to stay at and I'm very thankful for the Customer service that I'm getting very well place. Very safe Place. Very clean place to stay at. We are right off the beach not to far from store.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Reviews