import './card.css'
import logo from '../../asserts/bookmyshow-logo.png';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";

function Card(review) {
    const { pics, names, MovieNames } = review;
    const [count, setcount] = useState(0);
    const [dislike, setDislike] = useState(0);
    let like = () => {
        setcount(count + 1);
    }
    let dislikes = () => {
        setDislike(dislike + 1);
    }
    return (
        <>
            <div className="cardoverall">
                <div className='propic'>
                    <img src={pics} alt="profile_pic" className='pro-pic' />
                    <div>
                        <h5>Siva</h5>
                        <div className='logoimg'>
                            <span><h5>Booked on</h5></span>
                            <img src={logo} className='user-logo' />
                        </div>

                    </div>
                    <div className='rating'>
                        <FaStar />
                        <span>8.3/10</span>
                    </div>
                </div>
                <h3>#SuperDirection #GreatActing #WowMusic #Aw...</h3>
                <span>excellent Team work, actor, director music</span>
                <div className='like'>
                    <AiOutlineLike onClick={like} /> <span>{count}</span>
                    <BiDislike onClick={dislikes} /> <span>{dislike}</span>
                    <div>
                        <span>4 Days Ago</span>
                        <CiShare2 />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;