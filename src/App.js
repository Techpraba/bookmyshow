import React, { useRef } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";
import Cast from './components/cast/cast';
import pic9 from './asserts/aadhi-pinisetty.avif'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Card from './components/Card/card';
import Footer from './components/Footer/Footer';
import Recomandation from './components/Footer/Recomandation/Recomandation';
import { FaPlay } from "react-icons/fa";
import dummy from './asserts/dummypic.jpg'
import headerBanner from './asserts/sabdham-et00431691-1740495164.avif';
import pic1 from './asserts/pic9.jpg';
import pic2 from './asserts/pic7.jpg';
import pic3 from './asserts/pic8.jpg'
import pic4 from './asserts/pic4.jpg';
import pic5 from './asserts/pic5.jpg'
function App() {
  const castRef = useRef(null);
  const hashtagRef = useRef(null);
  const userReview = useRef(null);
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='App'>
        <div className='home'>
          <div className='homepicright'></div>
          <div className='homepicleft'>

            <div className='card'>
              <img src={"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sabdham-et00431691-1740495164.jpg"} className='playpic' />
              <a href={"https://in.bookmyshow.com/chennai/movies/sabdham/ET00431691/multimedia"}>  <FaPlay />Trailler</a>
              <p>In Cinemas</p>
            </div>

            <div className='homeMovieDetails'>
              <h1>Sabdham</h1>
              <div className='homeRating'>
                <FaStar />
                <h6>8.3/10 (1.3k Votes) &gt;</h6>
                <button>Rate Now</button>
              </div>
              <div className='MovieLang'>
                <button className='btn1'>2D</button>
                <button className='btn1'>Tamil</button>
              </div>
              <div className='Movie-Ganres'>
                <p>2h 28m
                  •
                  Horror
                  ,
                  Thriller
                  •
                  UA13+
                  •
                  28 Feb, 2025</p>

              </div>
              <button className='booktheticketbtn'>Book Tickets</button>
            </div>
          </div>
        </div>
      </div>
      <div className='mobileBox'>
        <img src={headerBanner} className='mobilebanner' />
        <p>In Cinemas</p>
        <span className='mobileplayicon'><a href={"https://in.bookmyshow.com/chennai/movies/sabdham/ET00431691/multimedia"}>  <FaPlay />Trailler</a></span>
      </div>
      <div className='homeRating deactive'>
        <FaStar />
        <h6>8.3/10 (1.3k Votes) &gt;</h6>
        <button>Rate Now</button>
      </div>
      <div className='MovieLang btn'>
        <button className='btn1 clr'>2D</button>
        <button className='btn1 clr'>Tamil</button>
      </div>
      <div>
        <img src={dummy} className='dummy' />
      </div>
      <button className='mobilebtn'>Book Tickets</button>
      <div className='about'>
        <h2>About the Movie</h2>
        <p>Rooban, a ghost investigator, acts as a communication medium for the dead souls to fulfil their wishes and attain salvation. What if he is unable to unravel the mystery surrounding a particular soul which is creating havoc?</p>
        <div className='Movie-cast'>
          <h1>Cast</h1>
          <button onClick={() => scrollLeft(castRef)} className='scrollLeftButton'><FaChevronLeft /></button>
          <div className='Cast' ref={castRef}>
            <Cast pics={pic9} names={"Aadhi"} MovieNames={"As a Rooban"} />
            <Cast pics={pic1} names={"praba"} MovieNames={"As a luffy"} />
            <Cast pics={pic2} names={"raju"} MovieNames={"As a dinagar"} />
            <Cast pics={pic3} names={"vijay"} MovieNames={"As a parthiban"} />
            <Cast pics={pic4} names={"ajith"} MovieNames={"As a raja"} />
            <Cast pics={pic9} names={"mani"} MovieNames={"As a kannappan"} />
            <Cast pics={pic5} names={"santhanam"} MovieNames={"As a raju"} />
          </div>
          <button onClick={() => scrollRight(castRef)} className='scrollRightButton'><FaChevronRight /></button>
        </div>
        <div className='Movie-crew'>
          <h1>Crew</h1>
          <div className='crew'>
            <Cast pics={pic9} names={"Aadhi"} MovieNames={"As a Rooban"} />
            <Cast pics={pic4} names={"Vijay"} MovieNames={"As a JD"} />
            <Cast pics={pic3} names={"Ajith"} MovieNames={"As a arjun"} />
            <Cast pics={pic1} names={"Aadhi"} MovieNames={"As a Rooban"} />
          </div>
        </div>
      </div>
      <div className='User-Review'>
        <div className='User-Review-Header'>
          <h1>Top Reviews</h1>
          <h5>6661 Reviews </h5>
        </div>
        <h6>Summary of 6661 Reviews</h6>
        <button onClick={() => scrollLeft(hashtagRef)} className='hashtagleftButton'><FaChevronLeft /></button>
        <div className='hashtags' ref={hashtagRef} >
          <p className='hashtag'> #SuperDirection&nbsp;<span>100</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>279</span> </p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>90</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>456</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>23</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>32</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>112</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>376</span></p>
          <p className='hashtag'> #SuperDirection&nbsp;<span>12</span></p>
        </div>
        <button onClick={() => scrollRight(hashtagRef)} className='hashtagrightButton'><FaChevronRight /></button>
        <div className='user-review-card' ref={userReview}>
          <button onClick={() => scrollLeft(userReview)} className='hashtagleftButton userreviewLeft'><FaChevronLeft /></button>
          <Card pics={pic1} names={"Aadhi"} MovieNames={"As a Rooban"} />
          <Card pics={pic1} names={"Aadhi"} MovieNames={"As a Rooban"} />
          <Card pics={pic1} names={"Aadhi"} MovieNames={"As a Rooban"} />
          <button onClick={() => scrollRight(userReview)} className='hashtagrightButton userreviewRight'><FaChevronRight /></button>
        </div>
      </div>
      <div className='recomentation'>
        <div className='headline'>
          <h1>You May Also Like</h1>
          <p>View All &gt;</p>
        </div>
        <div className='recomnd'>
          <Recomandation />
          <Recomandation />
          <Recomandation />
          <Recomandation />
          <Recomandation />
          <Recomandation />
          <Recomandation />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
