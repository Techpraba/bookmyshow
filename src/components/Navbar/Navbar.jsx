import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../asserts/bookmyshow-logo.png';
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

import { FiShoppingBag } from "react-icons/fi";
import { CiStreamOn } from "react-icons/ci";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiGiftTop } from "react-icons/hi2";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

function Navbar() {
    const [slidewindow, setSlidewindow] = useState(false);
    const handleSlidewindow = () => {
        setSlidewindow(!slidewindow);
    }
    return (
        <>
            <div className='NavbarOverall'>

                <img src={Logo} alt="BookmyShow Logo" className='logo' />
                <input type="text" placeholder='Search for Movies,Events,Plays,Sports and Activities' />
                <select className='NavbarDropdown'>
                    <option value="movies">Movies</option>
                    <option value="events">Events</option>
                    <option value="plays">Plays</option>
                    <option value="sports">Sports</option>
                    <option value="activities">Activities</option>
                </select>
                <button className='NavbarButton'>Sign In</button>
                <FiAlignJustify onClick={handleSlidewindow} />
                <div className={` slide-Content ${slidewindow ? "show" : "hide"}`}>
                    <div >
                        <h1>Hey..!</h1>
                        <AiOutlineClose onClick={handleSlidewindow} className='cancelbtn' />
                    </div>

                    <div>
                        <div>
                            <IoIosNotifications />
                            <p>Notification</p>
                        </div>




                        <h5><FaChevronRight /></h5>


                    </div>
                    <div>
                        <div>
                            <FiShoppingBag />
                            <p>Your Orders</p>
                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div> <CiStreamOn />
                            <p>Stream Library</p></div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div>
                            <BiSolidCreditCardAlt />
                            <p>Play Credit Card</p>

                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div>
                            <MdHelpOutline />
                            <p>Help &  Support</p>
                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div>
                            <IoMdSettings />
                            <p>Accounts & Settings</p>
                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div>
                            <HiGiftTop />
                            <p>Rewards</p>
                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                    <div>
                        <div>
                            <BsFillFilterCircleFill />
                            <p>BookAChange</p>
                        </div>

                        <h5><FaChevronRight /></h5>
                    </div>
                </div>
            </div >
            <div className='SecNavbar'>
                <div>
                    <p>Movies</p>
                    <p>Stream</p>
                    <p>Events</p>
                    <p>plays</p>
                    <p>Sports</p>
                    <p>Activies</p>

                </div>
                <div>
                    <p>ListYourShow</p>
                    <p>Corporates</p>
                    <p>Offers</p>
                    <p>Gift-Code</p>
                </div>
            </div>

        </>
    );
}

export default Navbar;