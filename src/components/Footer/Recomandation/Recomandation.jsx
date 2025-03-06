import './recomandation.css';
import moviepic from '../../../asserts/sabdham-et00431691-1740495164.avif'
import { FaRegStar } from "react-icons/fa";

function recomandation() {
    return (
        <>
            <div className='MovieCardOverall'>
                <div className='Moivie-card'>
                    <img src={moviepic} alt="" className='moviepic' />
                    <div className='movieRating'>
                        <span> <FaRegStar /></span>
                        <p>9.3/10 47.7k votes</p>


                    </div>
                </div>
                <h1>Drogan</h1>
            </div>
        </>
    )
}
export default recomandation;