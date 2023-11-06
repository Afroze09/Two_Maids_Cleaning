import { Link } from "react-router-dom";
import { handleScroll } from "../utils";
export default function EventButton({className}) {
  return (
    <div className={` flex justify-center ${className}`}>
        <Link to="/book"><button onClick={handleScroll}  className='btn event-btn'>Book Your Cleaning </button></Link>
        <Link to="/book"><button onClick={handleScroll} className='btn event-btn'>Calculate Your Price</button></Link>
    </div>
  )
}
